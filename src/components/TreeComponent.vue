
  
 
  
  
  

  <!-- <template>
    <div class="tree-container" ref="treeContainer">
      <img src="../assets/img/state_winter.svg" class="tree" ref="tree" />
      <img src="../assets/img/spring.svg" class="leaves leaves_spring" ref="leavesSpring" />
      <img src="../assets/img/green.svg" class="leaves leaves_summer" ref="leavesSummer" />
      <img src="../assets/img/autumn.svg" class="leaves leaves_apples" ref="leavesApples" />
      <img src="../assets/img/green.svg" class="leaves leaves_autumn" ref="leavesAutumn" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount, watch } from "vue";
  
  export default {
    name: "TreeComponent",
    props: {
      footer: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const treeContainer = ref(null);
      const leavesSpring = ref(null);
      const leavesSummer = ref(null);
      const leavesApples = ref(null);
      const leavesAutumn = ref(null);
  
      const handleScroll = () => {
        const components = document.querySelectorAll(".center > *");
        const windowHeight = window.innerHeight;
  
        let currentComponentIndex = -1;
  
        components.forEach((component, index) => {
          const rect = component.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= windowHeight) {
            currentComponentIndex = index;
          }
        });
  
        if (currentComponentIndex === -1) {
         
          return;
        }
  
        
  
        // Remove active class from all leaves
        leavesSpring.value.classList.remove('active');
        leavesSummer.value.classList.remove('active');
        leavesApples.value.classList.remove('active');
        leavesAutumn.value.classList.remove('active');
  
        // Add active class based on the current component
        if (currentComponentIndex < 4) {
          leavesSpring.value.classList.add('active');
          
        } else if (currentComponentIndex >= 4 && currentComponentIndex < 6) {
          leavesSummer.value.classList.add('active');
          
        } else if (currentComponentIndex >= 6 && currentComponentIndex < 7) {
          leavesApples.value.classList.add('active');
         
        } else if (currentComponentIndex >= 7) {
          leavesAutumn.value.classList.add('active');
         
        }
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
  if (entry.isIntersecting) {
    // Если футер пересекает видимую область
    const footerTop = entry.boundingClientRect.top;
    const treeHeight = treeContainer.value.offsetHeight;

    // Устанавливаем абсолютное позиционирование относительно футера
    treeContainer.value.style.position = "absolute";
    treeContainer.value.style.top = `${scrollY + footerTop - treeHeight}px`;
    
  } else {
    // Если футер не пересекает видимую область
    treeContainer.value.style.position = "fixed";
    treeContainer.value.style.bottom = "0";
    treeContainer.value.style.left = "0";
    treeContainer.value.style.top = "";
   
  }
});
      });
   
  
      onMounted(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
  
        if (props.footer && props.footer.$el) {
          observer.observe(props.footer.$el);
          
        } else {
          console.error("Footer reference is not defined or invalid");
        }
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      });
  
      watch(
        () => props.footer,
        (newFooter) => {
          if (newFooter && newFooter.$el) {
            observer.observe(newFooter.$el);
            console.log("Observer re-attached to new footer:", newFooter.$el);
          }
        }
      );
  
      return {
        treeContainer,
        leavesSpring,
        leavesSummer,
        leavesApples,
        leavesAutumn,
      };
    },
  };
  </script>
  
  <style scoped>
  .tree-container {
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 402px;
    height: 737px;
    transition: bottom 0.5s;
  }
  
  .tree {
    width: 100%;
    height: 100%;
  }
  
  .leaves {
    position: absolute;
    z-index: 101;
    top: -120px;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  .leaves.active {
    opacity: 1;
  }
  @media only screen and (max-width: 1439px) and (min-width: 768px) {
    .tree-container {
    position: fixed;
    z-index: 100;
    top :100px;
    left: -20%;
    width: 206px;
    height: 378px;
    transition: bottom 0.5s;
  }
  .leaves {
    position: absolute;
    z-index: 101;
    top: -60px;
    left: -20%;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
  }
  }

  </style> -->


  <!-- <template>
    <div class="tree-container" ref="treeContainer">
      <img src="../assets/img/state_winter.svg" class="tree" ref="tree" />
      <img src="../assets/img/spring.svg" class="leaves leaves_spring" ref="leavesSpring" />
      <img src="../assets/img/green.svg" class="leaves leaves_summer" ref="leavesSummer" />
      <img src="../assets/img/autumn.svg" class="leaves leaves_apples" ref="leavesApples" />
      <img src="../assets/img/green.svg" class="leaves leaves_autumn" ref="leavesAutumn" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onBeforeUnmount, watch } from "vue";
  
  export default {
    name: "TreeComponent",
    props: {
      footer: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const treeContainer = ref(null);
      const leavesSpring = ref(null);
      const leavesSummer = ref(null);
      const leavesApples = ref(null);
      const leavesAutumn = ref(null);
  
      const handleScroll = () => {
        const components = document.querySelectorAll(".center > *");
        const windowHeight = window.innerHeight;
  
        let currentComponentIndex = -1;
  
        components.forEach((component, index) => {
          const rect = component.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= windowHeight) {
            currentComponentIndex = index;
          }
        });
  
        if (currentComponentIndex === -1) {
          return;
        }
  
        // Проверяем, существуют ли элементы, перед тем как выполнять с ними операции
        if (leavesSpring.value && leavesSummer.value && leavesApples.value && leavesAutumn.value) {
          leavesSpring.value.classList.remove('active');
          leavesSummer.value.classList.remove('active');
          leavesApples.value.classList.remove('active');
          leavesAutumn.value.classList.remove('active');
  
          if (currentComponentIndex < 4) {
            leavesSpring.value.classList.add('active');
          } else if (currentComponentIndex >= 4 && currentComponentIndex < 6) {
            leavesSummer.value.classList.add('active');
          } else if (currentComponentIndex >= 6 && currentComponentIndex < 7) {
            leavesApples.value.classList.add('active');
          } else if (currentComponentIndex >= 7) {
            leavesAutumn.value.classList.add('active');
          }
        }
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const footerTop = entry.boundingClientRect.top;
            const treeHeight = treeContainer.value.offsetHeight;
  
            if (treeContainer.value) {
              treeContainer.value.style.position = "absolute";
              treeContainer.value.style.top = `${scrollY + footerTop - treeHeight}px`;
            }
          } else {
            if (treeContainer.value) {
              treeContainer.value.style.position = "fixed";
              treeContainer.value.style.bottom = "0";
              treeContainer.value.style.left = "0";
              treeContainer.value.style.top = "";
            }
          }
        });
      });
  
      onMounted(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
  
        if (props.footer && props.footer.$el) {
          observer.observe(props.footer.$el);
          console.log("Observer attached to footer:", props.footer.$el);
        } else {
          console.error("Footer reference is not defined or invalid");
        }
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      });
  
      watch(
        () => props.footer,
        (newFooter) => {
          if (newFooter && newFooter.$el) {
            observer.observe(newFooter.$el);
            console.log("Observer re-attached to new footer:", newFooter.$el);
          } else {
            console.error("New footer reference is not defined or invalid");
          }
        }
      );
  
      return {
        treeContainer,
        leavesSpring,
        leavesSummer,
        leavesApples,
        leavesAutumn,
      };
    },
  };
  </script>
  
  <style scoped>
  .tree-container {
    position: fixed;
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 402px;
    height: 737px;
    transition: bottom 0.5s;
  }
  
  .tree {
    width: 100%;
    height: 100%;
  }
  
  .leaves {
    position: absolute;
    z-index: 101;
    top: -120px;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  .leaves.active {
    opacity: 1;
  }
  </style>
   -->

   <template>
  <div :class="treeContainerClass" ref="treeContainer">
    <img src="../assets/img/state_winter.svg" class="tree" ref="tree" />
    <img
      src="../assets/img/spring.svg"
      class="leaves leaves_spring"
      ref="leavesSpring"
    />
    <img
      src="../assets/img/green.svg"
      class="leaves leaves_summer"
      ref="leavesSummer"
    />
    <img
      src="../assets/img/autumn.svg"
      class="leaves leaves_apples"
      ref="leavesApples"
    />
    <img
      src="../assets/img/green.svg"
      class="leaves leaves_autumn"
      ref="leavesAutumn"
    />
  </div>
</template>
  
  <script>
import { ref, onMounted, onBeforeUnmount, watch, computed } from "vue";

export default {
  name: "TreeComponent",
  props: {
    footer: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const treeContainer = ref(null);
    const leavesSpring = ref(null);
    const leavesSummer = ref(null);
    const leavesApples = ref(null);
    const leavesAutumn = ref(null);

    const isTablet = () =>
      window.innerWidth >= 768 && window.innerWidth <= 1439;
    const isMobile = () => window.innerWidth < 768;
    const updateTreePosition = () => {
      if (treeContainer.value) {
        if (isTablet()) {
          treeContainer.value.style.top = "100px";
          treeContainer.value.style.left = "-69px";
          treeContainer.value.style.width = "256px";
          treeContainer.value.style.height = "470px";
          treeContainer.value.style.bottom = "";
        } else if (isMobile()) {
          treeContainer.value.style.top = "";
          treeContainer.value.style.left = "";
          treeContainer.value.style.width = "281px";
          treeContainer.value.style.height = "514px";
          treeContainer.value.style.bottom = "0";
        } else {
          treeContainer.value.style.top = "";
          treeContainer.value.style.left = "0";
          treeContainer.value.style.width = "402px";
          treeContainer.value.style.height = "737px";
          treeContainer.value.style.bottom = "0";
        }
      }
    };

    const handleScroll = () => {
      const components = document.querySelectorAll(".center .component");
      const windowHeight = window.innerHeight;

      let currentComponentIndex = -1;

      components.forEach((component) => {
        const rect = component.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= windowHeight) {
          currentComponentIndex = parseInt(component.dataset.index);
        }
      });

      if (currentComponentIndex === -1) {
        return;
      }

      console.log(`Current component index: ${currentComponentIndex}`);

      // Проверяем, существуют ли элементы, перед тем как выполнять с ними операции
      if (
        leavesSpring.value &&
        leavesSummer.value &&
        leavesApples.value &&
        leavesAutumn.value
      ) {
        leavesSpring.value.classList.remove("active");
        leavesSummer.value.classList.remove("active");
        leavesApples.value.classList.remove("active");
        leavesAutumn.value.classList.remove("active");

        if (currentComponentIndex < 3) {
          leavesSpring.value.classList.add("active");
        } else if (currentComponentIndex >= 3 && currentComponentIndex < 5) {
          leavesSummer.value.classList.add("active");
        } else if (currentComponentIndex >= 5 && currentComponentIndex < 7) {
          leavesApples.value.classList.add("active");
        } else if (currentComponentIndex >= 7) {
          leavesAutumn.value.classList.add("active");
        }
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const footerTop = entry.boundingClientRect.top;
          const treeHeight = treeContainer.value.offsetHeight;

          if (treeContainer.value) {
            treeContainer.value.style.position = "absolute";

            if (isTablet()) {
              treeContainer.value.style.top = `${
                window.scrollY + footerTop - treeHeight - 280
              }px`;
            } else if (isMobile()) {
              treeContainer.value.style.top = `${
                window.scrollY + footerTop - treeHeight
              }px`; // 100px выше топа футера
            } else {
              treeContainer.value.style.top = `${
                window.scrollY + footerTop - treeHeight
              }px`;
            }
          }
        } else {
          if (treeContainer.value) {
            treeContainer.value.style.position = "fixed";
            updateTreePosition();
          }
        }
      });
    });

    const treeContainerClass = computed(() => {
      return {
        "tree-container": true,
        "tree-container-tablet": isTablet(),
      };
    });

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", updateTreePosition);
      handleScroll();
      updateTreePosition();

      if (props.footer && props.footer.$el) {
        observer.observe(props.footer.$el);
        console.log("Observer attached to footer:", props.footer.$el);
      } else {
        console.error("Footer reference is not defined or invalid");
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateTreePosition);
      observer.disconnect();
    });

    watch(
      () => props.footer,
      (newFooter) => {
        if (newFooter && newFooter.$el) {
          observer.observe(newFooter.$el);
          console.log("Observer re-attached to new footer:", newFooter.$el);
        } else {
          console.error("New footer reference is not defined or invalid");
        }
      }
    );

    return {
      treeContainer,
      leavesSpring,
      leavesSummer,
      leavesApples,
      leavesAutumn,
      treeContainerClass,
    };
  },
};
</script>


<style scoped>
.tree-container {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;

  transition: bottom 0.5s;
}

.tree {
  width: 100%;
  height: 100%;
  position: relative;
}

.leaves {
  position: absolute;
  z-index: 101;
  top: -120px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s;
}

.leaves.active {
  opacity: 1;
}

@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .leaves {
    top: -75px;
    left: 0;
  }
}
@media only screen and (max-width: 767px) {
  .tree-container {
    z-index: -100;
    opacity: 0.1;
  }
  .leaves {
    top: 0;
    left: 0;
    width: 302px;
    height: 333px;
  }
}
</style>
 
  
 
  
