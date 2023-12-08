/* 
  DO NOT EDIT THIS FILE

  Please do not modify files in the test directory.
  This can cause the tests to give incorrect results or fail, making it harder to identify and fix issues in the code.
  Make any necessary changes to the original file and re-run the tests to ensure they are still working correctly.
*/

module.exports = class TestReporter {
  constructor() {}
  
  onRunComplete(_, results) {
    console.log("\ntotal test cases:", results.numTotalTests);
    console.log("\npassed test cases:", results.numPassedTests);
    console.log("\nfailed test cases:", results.numFailedTests);
    const testCases = []
    for(const tr of results.testResults){
      for(const tr11 of tr.testResults){
        const tc = {
          title: tr11?.ancestorTitles.join(' | ').concat(` | ${tr11?.title}`),
          status: tr11?.status,
        };
        console.log(`===>TC ${JSON.stringify(tc)} TC<===`)
      }
    }
  }
}
