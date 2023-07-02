<template>
  <Form @addNote="handleAddNote" />
  <List @onRemove="handleRemoveNote" :notes="notes" />
</template>

<script>
import Form from "@/components/Notes/Form.vue";
import List from "@/components/Notes/List.vue";

export default {
  name: "HomeView",
  components: {
    Form,
    List,
  },
  data() {
    return {
      notes: [
        {
          title: "Learn Vue 3",
          tags: ["work"],
        },
        {
          title: "Finish course",
          tags: ["work", "home"],
        },
        {
          title: "Hello",
          tags: [],
        },
      ],
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
    handleAddNote(title) {
      const note = {
        title: title,
        tags: [],
      };
      this.notes.push(note);
    },
    handleRemoveNote(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>
