<template>
  <div class="cmp-comment">
    <div class="cmp-comment--star">
      {{ comment.stars }}
    </div>
    <div class="cmp-comment--title">{{ comment.title }}</div>
    <div class="cmp-comment--text">
      {{ comment.text }}
    </div>
    <pre class="cmp-comment--like">
👍 {{ comment.likes }}    👎 {{ comment.dislikes }}</pre
    >
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
