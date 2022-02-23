import Comment from "../main/webpack/components/fruit-page/Comment.vue";

export default {
  title: "Comment",
  component: Comment,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Comment },
  template: "<Comment :comment='comment' />",
});

export const Primary = Template.bind({});
Primary.args = {
  comment: {
    id: 1,
    title: "Emma Veum",
    text: "Dolor architecto sequi praesentium nihil explicabo sunt. Dicta eos quisquam qui sunt. Voluptas eum rerum minima. Voluptatem et excepturi. Dignissimos quo sunt repellat est.",
    likes: 600,
    dislikes: 50,
    stars: "⭐⭐⭐⭐⭐",
  },
};
