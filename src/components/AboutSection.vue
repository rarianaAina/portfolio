<style>
.polygon-shape {
  clip-path: polygon(50% 0%, 50% 0%, 100% 100%, 0% 100%);
  /* 👆 Ceci crée une forme hexagonale aplatie */
}
</style>
<template>
  <section
    id="apropos"
    class="py-16 lg:py-24 section-padding bg-white dark:bg-gray-800"
  >
    <div class="container-max">
      <div class="text-center mb-16">
        <h2
          class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          À propos de moi
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto"
        ></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- <div class="animate-slide-up">
          <div class="w-full h-80 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-2xl flex items-center justify-center">
            <div class="text-6xl text-primary-600 dark:text-primary-400">
              👨‍💻
            </div>
          </div>
        </div> -->
        <!-- 
        <div class="animate-slide-up">
          <div
            class="w-full h-80 bg-gradient-to-b from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-100 flex items-center justify-center polygon-shape rounded-full"
          >
            <img src="../dist/test.png" alt="test" class="h-24 w-auto" />
          </div>
        </div> -->
        <!-- 
        <div class="animate-slide-up">
          <div
            class="w-full h-80 bg-[conic-gradient(from_230.29deg_at_51.3%_52%,_rgba(87,111,255,0.8)_0deg,_rgba(135,91,255,0.8)_67.5deg,_rgba(255,107,107,0.8)_198.75deg,_rgba(255,159,91,0.8)_251.25deg,_rgba(82,207,255,0.8)_301.88deg,_rgba(87,111,255,0.8)_360deg)] dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/70 via-purple-500/70 to-rose-500/70 flex items-center justify-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] backdrop-blur-sm border border-white/20 shadow-[0_0_40px_-10px_rgba(135,91,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(135,91,255,0.7)] transition-all duration-500 hover:rounded-[39%_61%_70%_30%/39%_45%_55%_61%]"
          >
            <img
              src="../dist/moi.png"
              alt="test"
              class="h-[350px] w-auto drop-shadow-[0_5px_15px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div> -->

        <div class="animate-slide-up">
          <div
            class="w-full h-80 overflow-hidden relative bg-[conic-gradient(from_230.29deg_at_51.3%_52%,_rgba(87,111,255,0.8)_0deg,_rgba(135,91,255,0.8)_67.5deg,_rgba(255,107,107,0.8)_198.75deg,_rgba(255,159,91,0.8)_251.25deg,_rgba(82,207,255,0.8)_301.88deg,_rgba(87,111,255,0.8)_360deg)] dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/70 via-purple-500/70 to-rose-500/70 flex items-center justify-center rounded-[30%_70%_70%_30%/30%_30%_70%_70%] backdrop-blur-sm border border-white/20 shadow-[0_0_40px_-10px_rgba(135,91,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(135,91,255,0.7)] transition-all duration-500 hover:rounded-[39%_61%_70%_30%/39%_45%_55%_61%]"
          >
            <!-- <img
              src="../dist/moi.png"
              alt="moi"
              class="object-cover h-full w-full transition-transform duration-300 hover:scale-110"
            /> -->
            <img
              src="../dist/moi.png"
              alt="moi"
              class="max-h-[450px] w-auto object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        <div class="animate-slide-up">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Passionné par le développement
          </h3>

          <div
            class="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            <p>
              Fort de plusieurs années d'expérience dans le développement
              informatique, je me spécialise dans la création d'applications web
              robustes et performantes. Ma passion pour les nouvelles
              technologies me pousse constamment à apprendre et à innover.
            </p>

            <p>
              J'ai une expertise particulière dans l'écosystème Java avec Spring
              Boot, ainsi que dans les technologies front-end modernes. J'aime
              créer des solutions élégantes qui résolvent des problèmes réels.
            </p>

            <p>
              Quand je ne code pas, j'aime explorer les dernières tendances
              technologiques, contribuer à des projets open source, et partager
              mes connaissances avec la communauté des développeurs.
            </p>
          </div>

          <div class="mt-8 flex flex-wrap gap-4">
            <div
              class="flex items-center space-x-2 text-primary-600 dark:text-primary-400"
            >
              <CheckCircleIcon class="h-5 w-5" />
              <span class="font-medium">Développement Full-Stack</span>
            </div>
            <div
              class="flex items-center space-x-2 text-primary-600 dark:text-primary-400"
            >
              <CheckCircleIcon class="h-5 w-5" />
              <span class="font-medium">Architecture logicielle</span>
            </div>
            <div
              class="flex items-center space-x-2 text-primary-600 dark:text-primary-400"
            >
              <CheckCircleIcon class="h-5 w-5" />
              <span class="font-medium">DevOps & CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/24/outline";

export default {
  name: "AboutSection",
  components: {
    CheckCircleIcon,
  },
};
</script>
