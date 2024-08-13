<template>
  <div class="MainPage">
    <HeaderComponent />
    <TreeComponent :footer="footerRef" />
    <main class="center">
      <div class="component" data-index="0">
        <FirstComponent />
      </div>
      <div class="component" data-index="1">
        <SecondComponent />
      </div>
      <div class="component" data-index="2">
        <ThirdComponent />
      </div>
      <div class="component" data-index="3">
        <FourthComponent />
      </div>
      <div class="component" data-index="4">
        <FifthComponent />
      </div>
      <div class="component" data-index="5">
        <SixthComponent />
      </div>
      <div class="component" data-index="6">
        <SeventhComponent />
      </div>
      <div class="component" data-index="7">
        <EighthComponent />
      </div>
      <div class="component" data-index="8">
        <NinthComponent />
      </div>
    </main>
    <FooterComponent ref="footerRef" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import TreeComponent from '../components/TreeComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import FirstComponent from '../components/FirstComponent.vue';
import SecondComponent from '../components/SecondComponent.vue';
import ThirdComponent from '../components/ThirdComponent.vue';
import FourthComponent from '../components/FourthComponent.vue';
import FifthComponent from '../components/FifthComponent.vue';
import SixthComponent from '../components/SixthComponent.vue';
import SeventhComponent from '../components/SeventhComponent.vue';
import EighthComponent from '../components/EighthComponent.vue';
import NinthComponent from '../components/NinthComponent.vue';

export default {
  name: 'MainPage',
  components: {
    HeaderComponent,
    TreeComponent,
    FooterComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    EighthComponent,
    NinthComponent,
  },
  setup() {
    const footerRef = ref(null);

    onMounted(() => {
      console.log('Footer ref initialized:', footerRef.value);
    });

    return {
      footerRef,
    };
  },
};
</script>

<style>
@import url("../assets/common-styles.css");
.center {
  padding-left: calc(50% - 240px);
  padding-right: calc(50% - 480px);
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .center {
  padding-left: calc(50% - 170px);
  padding-right: calc(50% - 305px);
}}
@media only screen and (max-width: 767px) {
  .center {
  padding-left: calc(50% - 160px);
  padding-right: calc(50% - 160px);
}
}


</style>
