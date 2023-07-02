<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="addNote">
      <textarea
        v-model="value"
        placeholder="Add your note"
        name="NoteTitle"
        required
      />

      <TagsList @onItemClick="handleTagClick" :items="tags" />

      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from "@/components/UI/TagsList.vue";

export default {
  components: {
    TagsList,
  },
  data() {
    return {
      value: "",
      tags: ["home", "work", "travel"],
    };
  },
  methods: {
    addNote() {
      this.$emit("addNote", this.value);
      this.value = "";
    },
    handleTagClick(tag) {
      console.log(tag);
    },
  },
};
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
