<template>
  <div class="fourth__component center">
    <h1 class="fourth__title green-border">
      {{ $t("fourth.title") }}
    </h1>
    <p class="fourth__title_text">
      {{ $t("fourth.title_text1") }}
    </p>
    <p class="fourth__title_text">
      {{ $t("fourth.title_text2") }}
    </p>
    <button class="btn">
      {{ $t("fourth.button") }}
    </button>
    <p class="fourth__title_text">
      {{ $t("fourth.title_text3") }}
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "FourthComponent",
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>

<style scoped>
@import url("../assets/common-styles.css");
.fourth__component {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  padding: 0 10px;
}
.fourth__component::after {
  content: "";
  position: absolute;
  top: 0;
  right: -40%;
  bottom: 0;
  width: 100%; 
  background-image: url("../assets/img/bg_farmer.png");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto; /* или задать конкретные размеры */
  z-index: -1;
}

.fourth__title {
  color: #fefffa;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 133%;
}

.fourth__title_text {
  color: #313131;
  font-family: Raleway;
  font-size: 20px;

  font-weight: 400;
  line-height: 133%;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .fourth__component::after {
    top: 10px;
    right: 0;
    width: 415px;
    height: 415px;
    background-size: 400px 400px;
  }
}
@media only screen and (max-width: 767px) {
  .fourth__component {
    margin-top: 120px;
    padding: 0 10px;
  }
  .fourth__component::after {
    background-image: none;
    right: 0;
  }

  .fourth__title {
    font-size: 20px;
  }

  .fourth__title_text {
    font-size: 18px;
  }
}
</style>
