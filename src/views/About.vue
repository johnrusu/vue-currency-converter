<template>
  <div class="about-container container mx-auto px-4 py-8">
    <div class="content max-w-4xl mx-auto">
      <h1 class="title is-2 has-text-centered mb-6">
        About Currency Converter
      </h1>

      <div class="card mb-5">
        <div class="card-content">
          <h2 class="title is-4">What is Currency Converter?</h2>
          <p class="mb-4">
            Currency Converter is a modern, fast, and user-friendly web
            application built with Vue.js 3 and TypeScript. It provides
            real-time currency conversion rates for multiple currencies around
            the world.
          </p>
          <p>
            Our goal is to make currency conversion simple and accessible for
            everyone, whether you're traveling, shopping online, or conducting
            international business.
          </p>
        </div>
      </div>

      <div class="card mb-5">
        <div class="card-content">
          <h2 class="title is-4">Features</h2>
          <div class="content">
            <ul>
              <li>
                <strong>Real-time Exchange Rates:</strong> Get the latest
                currency conversion rates updated regularly
              </li>
              <li>
                <strong>Multiple Currencies:</strong> Support for a wide range
                of international currencies
              </li>
              <li>
                <strong>Fast & Responsive:</strong> Built with modern web
                technologies for optimal performance
              </li>
              <li>
                <strong>Easy to Use:</strong> Simple and intuitive interface for
                quick conversions
              </li>
              <li>
                <strong>Copy to Clipboard:</strong> Easily copy converted
                amounts with one click
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card mb-5">
        <div class="card-content">
          <h2 class="title is-4">Technologies Used</h2>
          <div class="content">
            <div class="tags">
              <span class="tag is-info is-medium">Vue.js 3</span>
              <span class="tag is-info is-medium">TypeScript</span>
              <span class="tag is-info is-medium">Vite</span>
              <span class="tag is-info is-medium">Tailwind CSS</span>
              <span class="tag is-info is-medium">Buefy</span>
              <span class="tag is-info is-medium">Axios</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card mb-5">
        <div class="card-content">
          <h2 class="title is-4">How to Use</h2>
          <div class="content">
            <ol>
              <li>Enter the amount you want to convert</li>
              <li>Select the currency you're converting from</li>
              <li>Select the currency you're converting to</li>
              <li>The conversion will happen automatically as you type</li>
              <li>
                Click the copy button to copy the converted amount to your
                clipboard
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div class="card mb-5">
        <div class="card-content">
          <h2 class="title is-4">About the Developer</h2>
          <div class="media">
            <div class="media-content">
              <p class="title is-5">Ionut Rusu</p>
              <p class="subtitle is-6">Fullstack Developer</p>
            </div>
          </div>
          <div class="content">
            <p class="mb-4">
              Ionut Rusu is a passionate Fullstack Developer based in Romania,
              specializing in Vue.js, Node.js, React.js, and UI/UX design. With
              expertise in modern web technologies and a keen eye for user
              experience, Ionut creates efficient and elegant solutions for
              complex problems.
            </p>
            <p class="mb-4">
              This Currency Converter application showcases the power of modern
              JavaScript frameworks and demonstrates a commitment to building
              practical, user-friendly tools.
            </p>
            <div class="buttons">
              <a
                href="https://rusu-ionut.ro"
                target="_blank"
                class="button is-link"
              >
                <span class="icon">
                  <i class="fas fa-globe"></i>
                </span>
                <span>Visit Portfolio</span>
              </a>
              <a
                href="https://github.com/johnrusu"
                target="_blank"
                class="button is-dark"
              >
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ionut-rusu-1035b112"
                target="_blank"
                class="button is-info"
              >
                <span class="icon">
                  <i class="fab fa-linkedin"></i>
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-content has-text-centered">
          <h2 class="title is-4">Contact & Support</h2>
          <p class="mb-4">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <a :href="CONTACT_URL" target="_blank" class="button is-primary">
            <span class="icon">
              <i class="fas fa-envelope"></i>
            </span>
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CONTACT_URL } from "@/constants";
</script>

<style scoped>
.about-container {
  min-height: 70vh;
}

.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.card-content {
  padding: 2rem;
}

.title {
  color: #ffffff;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
