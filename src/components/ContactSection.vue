<template>
  <section id="contact" class="py-16 lg:py-24 section-padding">
    <div class="container-max">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contactez-moi
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter !
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="animate-slide-up">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Restons en contact
            </h3>
            
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon class="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">Email</h4>
                  <a 
                    href="mailto:rarianamiadana@gmail.com" 
                    class="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    rarianamiadana@gmail.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <svg class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">GitHub</h4>
                  <a 
                    href="https://github.com/rarianaAina" 
                    target="_blank"
                    class="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    github.com/rarianaAina
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <svg class="h-6 w-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/rariana-aina-andriamiadana" 
                    target="_blank"
                    class="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="mt-8">
              <h4 class="font-medium text-gray-900 dark:text-white mb-4">Suivez-moi</h4>
              <div class="flex space-x-4">
                <a 
                  href="https://github.com/rarianaAina" 
                  target="_blank"
                  class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://linkedin.com/in/rariana-aina-andriamiadana" 
                  target="_blank"
                  class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="mailto:rarianamiadana@gmail.com"
                  class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  <EnvelopeIcon class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="animate-slide-up">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Votre nom complet"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-500 transition-colors duration-200"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sujet
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows="5"
                  v-model="form.message"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-800 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                class="w-full btn-primary"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'ContactSection',
  components: {
    EnvelopeIcon
  },
  setup() {
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    const handleSubmit = () => {
      // Créer le lien mailto avec les données du formulaire
      const subject = encodeURIComponent(form.value.subject)
      const body = encodeURIComponent(
        `Nom: ${form.value.name}\n` +
        `Email: ${form.value.email}\n\n` +
        `Message:\n${form.value.message}`
      )
      
      window.location.href = `mailto:rarianamiadana@gmail.com?subject=${subject}&body=${body}`
      
      // Réinitialiser le formulaire
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
    
    return {
      form,
      handleSubmit
    }
  }
}
</script>