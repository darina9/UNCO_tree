<template>
  <div class="eighth__component center">
    <h1 class="eighth__title green-border">{{ $t("eighth.title") }}</h1>
    <ul class="eighth__list">
      <li v-for="(item, index) in faqs" :key="index" class="eighth__item">
        <div class="eighth__item_text">
          <h6 class="eighth__item_question">{{ item.question }}</h6>
          <h6 class="eighth__item_answer" :class="{ visible: item.visible }">
            {{ item.answer }}
            <a :href="'#form'" >
  <button class="btn" v-if="index === faqs.length - 1">
    {{ $t("eighth.btn") }}
  </button>
</a>
          </h6>
        </div>
        <button
          :class="['eighth__item_btn', { active: item.visible }]"
          @click="toggleAnswer(index)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_177_427)">
              <path
                class="path_1"
                d="M4.44444 40C3.2657 40 2.13524 39.5317 1.30175 38.6983C0.46825 37.8648 0 36.7343 0 35.5556V4.44444C0 3.2657 0.46825 2.13524 1.30175 1.30175C2.13524 0.468253 3.2657 0 4.44444 0L35.5556 0C36.7343 0 37.8648 0.468253 38.6983 1.30175C39.5317 2.13524 40 3.2657 40 4.44444V35.5556C40 36.7343 39.5317 37.8648 38.6983 38.6983C37.8648 39.5317 36.7343 40 35.5556 40H4.44444Z"
                :fill="item.visible ? '#a2c33d' : '#bc0051'"
              />
              <path
                d="M24.4449 7.77783V17.7778H32.2227L20.0004 32.2223L7.77821 17.7778H15.556V7.77783H24.4449Z"
                fill="#FEFFFA"
              />
            </g>
            <defs>
              <clipPath id="clip0_177_427">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                  transform="matrix(0 1 -1 0 40 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>
 <script>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { defineComponent } from "vue";

export default defineComponent({
  name: "EighthComponent",
  setup() {
    const { t, locale } = useI18n();
    const faqs = ref([]);

    const updateFaqs = () => {
      faqs.value = [
        {
          question: t("eighth.questions.1"),
          answer: t("eighth.answers.1"),
          visible: false,
        },
        {
          question: t("eighth.questions.2"),
          answer: t("eighth.answers.2"),
          visible: false,
        },
        {
          question: t("eighth.questions.3"),
          answer: t("eighth.answers.3"),
          visible: false,
        },
        {
          question: t("eighth.questions.4"),
          answer: t("eighth.answers.4"),
          visible: false,
        },
        {
          question: t("eighth.questions.5"),
          answer: t("eighth.answers.5"),
          visible: false,
        },
      ];
    };

    // Initialize FAQs
    updateFaqs();

    // Watch for changes in locale
    watch(locale, () => {
      updateFaqs();
    });

    const toggleAnswer = (index) => {
      faqs.value[index].visible = !faqs.value[index].visible;
    };

    return {
      faqs,
      toggleAnswer,
      t,
    };
  },
});
</script>
 
 <style scoped >
@import url("../assets/common-styles.css");
.eighth__component {
  margin-top: 660px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.eighth__title {
  margin-bottom: 20px;
  color: #fefffa;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 700;
  line-height: 133%;
}

.eighth__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.eighth__item {
  display: flex;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid #bc0051;
  padding: 15px;
  align-items: center;
  position: relative;
  align-items: flex-start;
}

.eighth__item_text {
  display: flex;
  flex-direction: column;
 
  gap: 20px;
  flex-grow: 1;
}

.eighth__item_question {
  color: #313131;
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 50px;
}

.eighth__item_answer {
  visibility: hidden;
  color: #313131;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 133%;

  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 1s ease, opacity 1s ease;
}

.eighth__item_answer.visible {
  visibility: visible;
  
  max-height: 180px;
  opacity: 1;
}

.eighth__item_btn {
  border: none;
  width: 40px;
  height: 40px;
  background: none;
  cursor: pointer;
  align-items: flex-start;
  position: absolute;
  left: 15px;
  top: 15px;
}

.eighth__item_btn .path_1 {
  transition: fill 0.3s;
}

.eighth__item_btn.active .path_1 {
  fill: #a2c33d;
}
.btn {
  
  margin-top: 10px;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .eighth__component {
    margin-top: 200px;
  }

  .eighth__item_text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex-grow: 1;
  }

  .eighth__item_question {
    font-size: 20px;
  }

  .eighth__item_answer {
    font-size: 20px;
  }

  .eighth__item_answer.visible {
 
    max-height: 270px;
   
  }

  .eighth__item_btn {
    border: none;
    width: 40px;
    height: 40px;
    background: none;
    cursor: pointer;
  }

  .eighth__item_btn .path_1 {
    transition: fill 0.3s;
  }

  .eighth__item_btn.active .path_1 {
    fill: #a2c33d;
  }
  .btn {
    margin-top: 10px;
  }
}
@media only screen and (max-width: 767px) {
  .eighth__component {
  margin-top: 120px;
/* padding: 0 10px; */
}
.eighth__item_answer.visible {
  
    max-height: 400px;
   
  }
  .eighth__item_question {
    font-size: 20px;
  }

  .eighth__item_answer {
    font-size: 20px;
  }
  .eighth__item {

  gap: 0;
 
}
.eighth__item_question {
margin-right: 30px;
}
}
</style>