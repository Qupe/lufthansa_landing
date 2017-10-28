<template>
  <div class="bonuses animated" :class="{fadeOutDownBig: !visible, fadeInUpBig: visible }">
    <div class="bonuses__descriptions">
      <div class="bonuses__descriptions-item animated" :class="{fadeOutDownBig: !bonus.active, fadeInUpBig: bonus.active }"
           v-for="(bonus, index) of bonuses"
           :key="index">
        <div class="container">
          <div class="grid">
            <div class="span-12">
              <div class="bonuses__descriptions-item-head">
                <img :src="bonus.active ? bonus.icon[1] : bonus.icon[0]" class="bonuses__descriptions-item-icon"
                     :alt="bonus.name"/>
                {{ bonus.name }}
                <i class="bonuses__descriptions-item-close" @click="setUnactive(index)">&times;</i>
              </div>
              <div class="bonuses__descriptions-item-text" v-html="bonus.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bonuses__list">
      <div class="container">
        <div class="grid">
          <div class="span-2">
            <img src="../../assets/lufthansa-logo.svg" alt="" width="135" class="bonuses__lufthansa-logo"/>
          </div>
          <div class="span-8 text-center">
            <img ref="airplane" src="./bonuses-airplane.svg" class="bonuses__list-airplane animated"
                 :class="{'bonuses__list-airplane_reverted': !direction}"
                 :style="{left: distance + '%', transition: 'all 0.5s linear'}" alt=""/>
            <div class="bonuses__list-bar" :class="{'bonuses__list-bar_finished':finished}"></div>
            <div class="bonuses__list-seek" :style="{width: distance + '%', transition: 'all 0.5s linear'}"></div>
            <div class="bonuses__list-item" :class="{'bonuses__list-item_active': bonus.active || bonus.reached }"
                 @click="setActive(index)" v-for="(bonus, index) of bonuses" :key="index">
              <img :src="bonus.active || bonus.reached ? bonus.icon[1] : bonus.icon[0]" class="bonuses__list-item-icon"
                   :alt="bonus.name"/>
            </div>
          </div>
          <div class="span-2 text-right">
            <img src="../../assets/miles-and-more-logo.svg" alt="" width="120" class="bonuses__miles-and-more-logo"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./bonuses.js"></script>
<style lang="scss" src="./bonuses.scss"></style>
