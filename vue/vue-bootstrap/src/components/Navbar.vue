<template>
  <div>
    <!-- 最外層容器 顏色設定 -->
    <b-navbar type="light" variant="light" class="mb-2">
      <b-navbar-nav>
        <!-- 基本選項 -->
        <b-nav-item href="#">Home</b-nav-item>
        <!-- disabled 禁用 -->
        <b-nav-item href="#" disabled>disabled</b-nav-item>
        <!-- Navbar dropdowns 下拉多個選單 -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
