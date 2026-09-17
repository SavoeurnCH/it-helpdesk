<template>
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <img src="/Logo.png" alt="PNC Logo" class="brand-logo" />
        <div><strong>Helpdesk</strong><span>IT Support System</span></div>
      </div>
      <nav>
        <RouterLink to="/"><span>⌂</span> Dashboard</RouterLink>
        <RouterLink to="/tickets"><span>▣</span> Tickets <b>3</b></RouterLink>
        <RouterLink to="/computers"><span>▤</span> Computers</RouterLink>
        <RouterLink to="/users"><span>♙</span> Users</RouterLink>
        <RouterLink to="/reports"><span>▥</span> Reports</RouterLink>
      </nav>
      <div class="sidebar-bottom"><RouterLink to="/about"><span>ⓘ</span> About</RouterLink><small>Vue Deployment Lab<br>v1.0.0</small></div>
    </aside>
    <main class="main">
      <header class="topbar"><div class="mobile-title">IT Helpdesk</div><div class="top-actions"><div class="search">⌕ <input placeholder="Search..." aria-label="Search"></div><button class="icon-btn">◔</button><div class="avatar">SA</div><div><strong>System Admin</strong><small>Administrator</small></div></div></header>
      <div class="content"><RouterView /></div>
    </main>
  </div>
</template>
