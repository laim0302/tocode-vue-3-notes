<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in notes" :key="index">
      <div class="note-header">
        <p class="note-content">{{ note.title }}</p>
        <span @click="editNote(note.id)"> &#9998; </span>
        <span @click="$emit('onRemove', index)"> &#10005; </span>
      </div>

      <div class="note-footer">
        <TagsList
          isPreview
          v-if="note.tags && note.tags.length > 0"
          :items="note.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TagsList from "@/components/UI/TagsList.vue";

export default {
  components: {
    TagsList,
  },
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.notes-list {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
}
.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    margin: 0 8px;
    cursor: pointer;
  }
}
.note-content {
  margin-right: auto;
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>
