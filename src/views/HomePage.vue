<template>
  <Form @addNote="handleAddNote" />
  <List @onRemove="handleRemoveNote" :notes="notes" />
</template>

<script>
import Form from "@/components/Notes/Form.vue";
import List from "@/components/Notes/List.vue";
import notes from "@/seeders/notes.json";

export default {
  name: "HomeView",
  components: {
    Form,
    List,
  },
  data() {
    return {
      notes: notes,
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    handleAddNote(noteContent) {
      const newNote = {
        id: Date.now(),
        content: noteContent,
        tags: [],
      };
      this.notes.push(newNote);
    },
    handleRemoveNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
};
</script>
