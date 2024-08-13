<template>
  <div class="first__component center">
    <h1 class="first__title">
      <p class="first__title_text " v-html="$t('first.title')"></p>
    </h1>
    <div class="first__text">
      <p class="first__text_left">{{ $t("first.text_left") }}</p>
      <ul class="first__text_right list-style">
        <li class="first__text_right-item item-style">
          <img class="first__text_right-img" src="../assets/img/apple.svg" />
          <p class="first__text_right-text">
            {{ $t("first.text_right.farmers") }}
          </p>
        </li>
        <li class="first__text_right-item item-style">
          <img class="first__text_right-img" src="../assets/img/apple.svg" />
          <p class="first__text_right-text">
            {{ $t("first.text_right.producers") }}
          </p>
        </li>
        <li class="first__text_right-item item-style">
          <img class="first__text_right-img" src="../assets/img/apple.svg" />
          <p class="first__text_right-text">
            {{ $t("first.text_right.importers") }}
          </p>
        </li>
      </ul>
    </div>
    <button class="btn">{{ $t("first.button") }}</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FirstComponent",
});
</script>

<style scoped >
@import url("../assets/common-styles.css");
.first__component {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 70px;
}
.first__text {
  display: flex;
}
.first__text_left {
  width: 40%;
  color: #313131;
  font-family: Raleway;
  font-size: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.first__text_right {
  width: 60%;
  padding-left: 25px;
}
.first__text_right-item {
  color: #313131;
  font-family: Raleway;
  font-size: 36px;

  font-weight: 400;
}
.green-border {
  font-size: 36px;

  font-weight: 700;
  line-height: 133%;
}
.first__title_text {
  color: #313131;
  font-family: Raleway;
  font-size: 36px;

  font-weight: 400;
  line-height: 133%;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .first__component {
    gap: 40px;
    margin-top: 40px;
  }

  .first__text_left {
    font-size: 24px;
  }

  .first__text_right-item {
    font-size: 24px;
  }
  .green-border {
    font-size: 24px;
  }
  .first__title_text {
    font-size: 24px;
  }
  .first__text_right-img {
    width: 16px;
    height: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .first__component {
    /* padding: 0 10px; */
    gap: 20px;
    margin-top: 40px;
  }
  .first__text {
    flex-direction: column;
    gap: 20px;
  }
  .first__text_left {
    width: 100%;

    font-size: 20px;
  }
  .first__text_right {
    width: 100%;
    padding-left: 0;
  }
  .first__text_right-item {
    font-size: 20px;
  }
  .green-border {
 width: 280px;
   
    
  }
.green-border{
    width: 280px !important;
  }
  .first__title_text {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .first__text_right-img {
    width: 16px;
    height: 20px;
  }
  .first__text_right-item {
    font-size: 18px;
  }
}
</style>