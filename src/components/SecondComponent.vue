<template>
  <div class="second__component center">
    <h1 class="second__title green-border">
      {{ t("second.title") }}
    </h1>
    <ul class="second__text list-style">
      <li
        class="second__text_item item-style"
        v-for="(item, index) in items"
        :key="index"
      >
        <img class="second__text_img" src="../assets/img/apple.svg" />
        <p class="second__text_text">{{ item }}</p>
      </li>
    </ul>
  </div>
</template>
  
  <script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "SecondComponent",
  setup() {
    const { t, locale } = useI18n();
    const items = ref([]);

    const updateItems = () => {
      items.value = [
        t("second.items.0"),
        t("second.items.1"),
        t("second.items.2"),
      ];
    };

    onMounted(() => {
      updateItems();
    });

    watch(locale, () => {
      updateItems();
    });

    return { t, items };
  },
});
</script>
 
 <style scoped>
@import url("../assets/common-styles.css");
.second__component {
  margin-top: 200px;
  padding: 0 10px;
}
.second__title {
  margin-bottom: 20px;
  color: #fefffa;
  font-family: Raleway;
  font-size: 24px;

  font-weight: 700;
  line-height: 133%;
}
.second__text_item {
  color: #313131;
  font-family: Raleway;
  font-size: 20px;

  font-weight: 400;
  line-height: 133%;
}

.second__text_img {
  width: 16px;
  height: 20px;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .second__component {
    margin-top: 200px;
  }
}

@media only screen and (max-width: 767px) {
  .second__component {
    margin-top: 120px;
    padding: 0 10px;
  }
  .second__title {
    font-size: 20px;

    text-align: center;
  }
  .second__text_item {
    font-size: 18px;
  }
}
</style>
