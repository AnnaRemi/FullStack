from django.contrib import admin
from .models import Note


@admin.register(Note)
class NoteModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')


