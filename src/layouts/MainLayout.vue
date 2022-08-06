<template>
  <div class="app-main-layout">

    <!-- <Navbar @click= "isOpen = !isOpen" /> -->
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click="isOpen = !isOpen">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{dateFilter('datetime')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="for_dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>

    <Sidebar :isOpen="isOpen"/>

    <main class="app-content open" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
// import Navbar from '@/components/app/Navbar.vue'
import Sidebar from '@/components/app/Sidebar.vue'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  components: {
    // Navbar,
    Sidebar,
  },
  mounted() {
    this.interval = setInterval(() =>{
      this.date = new Date()
    }, 1000)
    this.dropdown = M.Dropdown.init(this.$refs.for_dropdown, {
      constrainWidth: false
    })
  },
  beforeDestroy() {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  },
  methods: {
    logout() {
      this.$router.push('/login?message=logout')
    },
    dateFilter(value, format = 'date') {
        value = this.date
        const options= {}
        if (format.includes('date')) {
          options.day = '2-digit'
          options.month = 'long'
          options.year = 'numeric'
          options.hour = '2-digit'
          options.minute = '2-digit'
          options.second = '2-digit'
        }
        return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
    }
  },

}
</script>
