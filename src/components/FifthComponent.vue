<template>
  <div class="fifth__component center">
    <h1 class="fifth__title green-border">
      {{ $t("fifth.title") }}
    </h1>
    <p class="fifth__title_text">
      {{ $t("fifth.title_text1") }}
    </p>
    <p class="fifth__title_text">
      {{ $t("fifth.title_text2") }}
    </p>
    <button class="btn">
      {{ $t("fifth.button") }}
    </button>
    <p class="fifth__title_text">
      {{ $t("fifth.title_text3") }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "FifthComponent",
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
 
 <style scoped>
@import url("../assets/common-styles.css");
.fifth__component {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  padding: 0 10px;
}
.fifth__component::after {
  content: "";
  position: absolute;
  top: 0;
  right: -40%;
  bottom: -25%;
  width: 100%; /* или нужная ширина */
  background-image: url("../assets/img/bg_house.png");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto; /* или задать конкретные размеры */
  z-index: -1;
}
.fifth__title {
  color: #fefffa;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 133%;
}

.fifth__title_text {
  color: #313131;
  font-family: Raleway;
  font-size: 20px;

  font-weight: 400;
  line-height: 133%;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .fifth__component {
    margin-top: 200px;
  }
  .fifth__component::after {
    top: 10%;
    right: 0;
    width: 342px;
    height: 342px;
    background-size: 342px 342px;
  }
}

@media only screen and (max-width: 767px) {
  .fifth__component {
    margin: 120px 10px 0;
  }
  .fifth__component::after {
    background-image: none;
    right: 0;
  }
  .fifth__title {
    font-size: 20px;
  }

  .fifth__title_text {
    font-size: 18px;
  }
}
</style>
