# Generated by Django 4.2.2 on 2023-06-30 21:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_empregado_company'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empregado',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.empresa'),
        ),
    ]