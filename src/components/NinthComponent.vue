<template>
  <div class="ninth__component center" id="form">
    <div class="ninth-form">
      <form id="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="contact-method" class="green-border">{{
            $t("ninth.questions")
          }}</label>
          <div class="dropdown">
            <input
              type="text"
              id="contact-method"
              v-model="selectedMethod"
              :placeholder="t('ninth.method_of_communication')"
              readonly
            />
            <button type="button" id="dropdown-btn" @click="toggleDropdown">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_402_104)">
                  <path
                    d="M4.44444 40C3.2657 40 2.13524 39.5317 1.30175 38.6983C0.46825 37.8648 0 36.7343 0 35.5556V4.44444C0 3.2657 0.46825 2.13524 1.30175 1.30175C2.13524 0.468253 3.2657 0 4.44444 0L35.5556 0C36.7343 0 37.8648 0.468253 38.6983 1.30175C39.5317 2.13524 40 3.2657 40 4.44444V35.5556C40 36.7343 39.5317 37.8648 38.6983 38.6983C37.8648 39.5317 36.7343 40 35.5556 40H4.44444Z"
                    fill="#BC0051"
                  />
                  <path
                    d="M24.4449 7.77783V17.7778H32.2227L20.0004 32.2223L7.77821 17.7778H15.556V7.77783H24.4449Z"
                    fill="#FEFFFA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_402_104">
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
            <ul id="dropdown-list" v-show="dropdownVisible">
              <li
                v-for="method in methods"
                :key="method.value"
                @click="selectMethod(method.value)"
              >
                {{ method.text }}
              </li>
            </ul>
          </div>
        </div>

        <div class="form-group">
          <label for="contact-info">{{}}</label>
          <input
            type="text"
            id="contact-info"
            v-model="contactInfo"
            :placeholder="contactInfoPlaceholder"
            required
            :pattern="contactInfoPattern"
          />
        </div>

        <div class="form-group" id="message-group">
          <label for="message">{{ $t("ninth.message") }}</label>
          <textarea
            id="message"
            v-model="message"
            :placeholder="t('ninth.enter_message')"
          ></textarea>
        </div>

        <div class="form-group">
          <button type="submit">{{ $t("ninth.send") }}</button>
        </div>

        <div
          id="form-status"
          :style="{
            display: formStatusVisible ? 'block' : 'none',
            color: formStatusColor,
          }"
        >
          {{ formStatus }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "NinthComponent",
  setup() {
    const { t, locale } = useI18n();
    const selectedMethod = ref("");
    const contactInfo = ref("");
    const contactInfoLabel = ref(t("ninth.enter_contact_info"));
    const contactInfoPlaceholder = ref(t("ninth.enter_contact_info"));
    const contactInfoPattern = ref(".*");
    const message = ref("");
    const formStatus = ref("");
    const formStatusVisible = ref(false);
    const formStatusColor = ref("green");
    const dropdownVisible = ref(false);

    const methods = ref([
      { value: "Phone", text: t("ninth.phone_number") },
      { value: "Email", text: t("ninth.email") },
      { value: "Messenger", text: t("ninth.messenger_link") },
      { value: "Social", text: t("ninth.social_network_link") },
    ]);

    const toggleDropdown = () => {
      dropdownVisible.value = !dropdownVisible.value;
    };

    const selectMethod = (method) => {
      selectedMethod.value = methods.value.find((m) => m.value === method).text;
      dropdownVisible.value = false;

      switch (method) {
        case "Phone":
          contactInfoPlaceholder.value = "+49";
          contactInfoPattern.value = "\\+\\d+";
          break;
        case "Email":
          contactInfoPlaceholder.value = "example@example.com";
          contactInfoPattern.value =
            "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";
          break;
        case "Messenger":
          contactInfoPlaceholder.value = t("ninth.paste_messenger_link");
          contactInfoPattern.value = ".*";
          break;
        case "Social":
          contactInfoPlaceholder.value = t("ninth.paste_social_network_link");
          contactInfoPattern.value = ".*";
          break;
        default:
          contactInfoPlaceholder.value = t("ninth.enter_contact_info");
          contactInfoPattern.value = ".*";
      }
    };

    const submitForm = async () => {
      const form = document.getElementById("contact-form");

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData();
      formData.append("contact-method", selectedMethod.value);
      formData.append("contact-info", contactInfo.value);
      formData.append("message", message.value);

      try {
        const response = await fetch("https://feedback.foodfutures.net/", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          formStatus.value = "Form submitted successfully!";
          formStatusColor.value = "green";
          formStatusVisible.value = true;
          setTimeout(() => {
            formStatusVisible.value = false;
          }, 5000);
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Error:", error);
        formStatus.value = "There was an error submitting the form.";
        formStatusColor.value = "red";
        formStatusVisible.value = true;
      }
    };

    watch(locale, () => {
      contactInfoLabel.value = t("ninth.contact_info");
      contactInfoPlaceholder.value = t("ninth.enter_contact_info");
      methods.value = [
        { value: "Phone", text: t("ninth.phone_number") },
        { value: "Email", text: t("ninth.email") },
        { value: "Messenger", text: t("ninth.messenger_link") },
        { value: "Social", text: t("ninth.social_network_link") },
      ];
    });

    return {
      t,
      selectedMethod,
      contactInfo,
      contactInfoLabel,
      contactInfoPlaceholder,
      contactInfoPattern,
      message,
      formStatus,
      formStatusVisible,
      formStatusColor,
      dropdownVisible,
      methods,
      toggleDropdown,
      selectMethod,
      submitForm,
    };
  },
};
</script>

<style scoped>
@import url("../assets/common-styles.css");
.ninth__component {
  margin-top: 200px;
  border-radius: 20px 20px 0 0;

  flex-wrap: wrap;
  padding: 40px 10px;
  position: relative;
  width: 100%;
}

.ninth__top {
  display: flex;
  gap: 125px;
  flex-wrap: wrap;
  width: 100%;
}

.ninth__links {
  display: flex;
  gap: 50px;
  width: 100%;
}

.ninth__links_item a svg {
  fill: currentColor;
}

.svg-link {
  display: inline-block;
}

.ninth__contacts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.ninth__contacts_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.ninth__contacts_title {
  color: #fefffa;
  font-size: 32px;
  font-weight: 600;
  width: 100%;
}

.ninth__contacts_text {
  color: #fefffa;
  font-size: 18px;
  font-weight: 600;
  line-height: 166%;
  width: 100%;
}

.ninth-form {
  width: 100%;
  overflow: hidden;
  margin-bottom: 25px;
}

.ninth-form:last-child {
  margin-left: auto;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

.label {
  display: block;
  margin-bottom: 5px;
  width: 100%;
}

label[for="contact-method"] {
  color: #fefffa;
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
}

input[type="text"],
textarea {
  padding: 6px;
  width: 100%;
  height: 52px;
  margin-top: 5px;
  border-radius: 8px;
  box-sizing: border-box;
  color: #313131;
  border: 1px solid #214b33;
  background: #fefffa;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 400;
  line-height: 166%;
}

textarea {
  height: 100px;
  width: 100%;
}

button[type="submit"] {
  width: 100%;
  padding: 10px 20px;
  background-color: #bc0051;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  float: right;
  font-family: "Montserrat";
  font-weight: 600;
  line-height: 166%;
  font-size: 24px;
}

.dropdown {
  position: relative;
  width: 100%;
}

#dropdown-btn {
  position: absolute;
  right: 6px;
  top: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

#dropdown-btn.active {
  transform: rotate(180deg);
}

#dropdown-list {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  /* border-radius: 8px; */
  box-sizing: border-box;
  border: none;
  z-index: 10;
  max-height: 150px;
  color: #313131;
}

#dropdown-list li:last-child {
  margin-bottom: 0;
}

#dropdown-list li {
  margin-bottom: 1px;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  box-sizing: border-box;
  color: #313131;
  border: 1px solid #214b33;
  background: #fefffa;
  font-size: 14px;
  font-weight: 400;
  line-height: 166%;
}

#dropdown-list li:hover {
  background-color: #a2c33d;
  color: #fefffa;
}

input[type="text"]:focus,
textarea:focus {
  outline: none;
  border-color: #214b33;
  box-shadow: none;
}

.ninth__agreement {
  font-size: 14px;
  font-weight: 400;
  line-height: 166%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 100%;
}

.grecaptcha-badge {
  visibility: hidden;
}

.ninth__rights {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 166%;
  width: 100%;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .ninth__component {
    margin-top: 200px;
  }
}
button[type="submit"] {
  width: 100%;
  padding: 10px 20px;
  background-color: #bc0051;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  float: right;
  font-family: "Montserrat";
  font-weight: 600;
  line-height: 166%;
  font-size: 20px;
}
@media only screen and (max-width: 767px) {
  .ninth__component {
    margin-top: 120px;
  }
  .ninth-form {
    padding: 0 10px;
  }
}
</style>

