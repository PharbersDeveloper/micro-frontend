<template>
<!-- 最外层div -->
  <div
    :class="carouselClasses"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave">
    <div
      class="el-carousel__container"
      :style="{ height: height }">
      <!-- 左边切换箭头 -->
      <transition
        v-if="arrowDisplay"
        name="carousel-arrow-left">
        <button
          type="button"
          v-show="(arrow === 'always' || hover) && (loop || activeIndex > 0)"
          @mouseenter="handleButtonEnter('left')"
          @mouseleave="handleButtonLeave"
          class="el-carousel__arrow el-carousel__arrow--left">
          <i class="el-icon-arrow-left"></i>
        </button>
      </transition>
      <!-- 右边切换箭头 -->
      <transition
        v-if="arrowDisplay"
        name="carousel-arrow-right">
        <button
          type="button"
          v-show="(arrow === 'always' || hover) && (loop || activeIndex < items.length - 1)"
          @mouseenter="handleButtonEnter('right')"
          @mouseleave="handleButtonLeave"
          class="el-carousel__arrow el-carousel__arrow--right">
          <i class="el-icon-arrow-right"></i>
        </button>
      </transition>
      <!-- 幻灯片内容显示区域 -->
      <slot></slot>
    </div>
    <!-- 底部切换指示器 -->
    <ul
      v-if="indicatorPosition !== 'none'"
      :class="indicatorsClasses">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          'el-carousel__indicator',
          'el-carousel__indicator--' + direction,
          { 'is-active': index === activeIndex }]"
        @click.stop="handleIndicatorClick(index)">
        <button class="el-carousel__button">
          <span v-if="hasLabel">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
//监听元素高度变化
import ResizeObserver from 'resize-observer-polyfill';

export default {
  name: 'bpCarousel',

  props: {
    initialIndex: { //初始幻灯片索引，从0开始
      type: Number,
      default: 0
    },
    height: String,
    trigger: { // 底部指示器触发方式
      type: String,
      default: 'hover'
    },
    autoplay: { // 是否自动切换
      type: Boolean,
      default: true
    },
    interval: { // 自动切换时间间隔
      type: Number,
      default: 3000
    },
    indicatorPosition: String, // 指示器位置
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: { //切换箭头的显示时机 always/hover/never
      type: String,
      default: 'hover'
    },
    type: String, //走马灯的类型,card
    loop: { //是否循环显示
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    }
  },

  data() {
    return {
      items: [], // 幻灯片数组
      activeIndex: -1, // 当前索引
      containerWidth: 0,
      timer: null,
      hover: false
    };
  },

  computed: {
    arrowDisplay() {
      return this.arrow !== 'never' && this.direction !== 'vertical';
    },

    hasLabel() {
      return this.items.some(item => item.label.toString().length > 0);
    },

    carouselClasses() {
      const classes = ['el-carousel', 'el-carousel--' + this.direction];
      if (this.type === 'card') {
        classes.push('el-carousel--card');
      }
      return classes;
    },

    indicatorsClasses() {
      const classes = ['el-carousel__indicators', 'el-carousel__indicators--' + this.direction];
      if (this.hasLabel) {
        classes.push('el-carousel__indicators--labels');
      }
      if (this.indicatorPosition === 'outside' || this.type === 'card') {
        classes.push('el-carousel__indicators--outside');
      }
      return classes;
    }
  },

  watch: {
    items(val) {
        debugger
      if (val.length > 0) this.setActiveItem(this.initialIndex);
    },

    activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);
      if (oldVal > -1) {
        this.$emit('change', val, oldVal);
      }
    },

    autoplay(val) {
      val ? this.startTimer() : this.pauseTimer();
    },

    loop() {
      this.setActiveItem(this.activeIndex);
    },

    interval() {
      this.pauseTimer();
      this.startTimer();
    }
  },

  methods: {
    handleMouseEnter() {
      this.hover = true;
      this.pauseTimer();
    },

    handleMouseLeave() {
      this.hover = false;
      this.startTimer();
    },

    itemInStage(item, index) {
      const length = this.items.length;
      if (index === length - 1 && item.inStage && this.items[0].active ||
        (item.inStage && this.items[index + 1] && this.items[index + 1].active)) {
        return 'left';
      } else if (index === 0 && item.inStage && this.items[length - 1].active ||
        (item.inStage && this.items[index - 1] && this.items[index - 1].active)) {
        return 'right';
      }
      return false;
    },

    handleButtonEnter(arrow) {
      if (this.direction === 'vertical') return;
      this.items.forEach((item, index) => {
        if (arrow === this.itemInStage(item, index)) {
          item.hover = true;
        }
      });
    },

    handleButtonLeave() {
      if (this.direction === 'vertical') return;
      this.items.forEach(item => {
        item.hover = false;
      });
    },
    // 将所有的幻灯片放入items数组中
    updateItems() {
        this.items = this.$children.filter(child => child.$options.name === 'bpCarouselItem');
    },
    //  重置幻灯片位置
    resetItemPosition(oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex);
      });
    },

    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else if (this.loop) {
        this.activeIndex = 0;
      }
    },

    pauseTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    startTimer() {
      if (this.interval <= 0 || !this.autoplay || this.timer) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },

    setActiveItem(index) {
      if (typeof index === 'string') {
        const filteredItems = this.items.filter(item => item.name === index);
        if (filteredItems.length > 0) {
          index = this.items.indexOf(filteredItems[0]);
        }
      }
      index = Number(index);
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[Element Warn][Carousel]index must be an integer.');
        return;
      }
      let length = this.items.length;
      const oldIndex = this.activeIndex;
      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1;
      } else {
        this.activeIndex = index;
      }
      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex);
      }
    },

    prev() {
      this.setActiveItem(this.activeIndex - 1);
    },

    next() {
      this.setActiveItem(this.activeIndex + 1);
    },

    handleIndicatorClick(index) {
      this.activeIndex = index;
    },

    handleIndicatorHover(index) {
      if (this.trigger === 'hover' && index !== this.activeIndex) {
        this.activeIndex = index;
      }
    }
  },

  created() {
  },

  mounted() {
    this.updateItems();
    
    const isServer = typeof window === 'undefined';

    /* istanbul ignore next */
    const resizeHandler = function(entries) {
    for (let entry of entries) {
        const listeners = entry.target.__resizeListeners__ || [];
        if (listeners.length) {
        listeners.forEach(fn => {
            fn();
        });
        }
    }
    };
    /* istanbul ignore next */
    const addResizeListener = function(element, fn) {
        if (isServer) return;
        if (!element.__resizeListeners__) {
            element.__resizeListeners__ = [];
            element.__ro__ = new ResizeObserver(resizeHandler);
            element.__ro__.observe(element);
        }
        element.__resizeListeners__.push(fn);
    };

    this.$nextTick(() => {
      addResizeListener(this.$el, this.resetItemPosition);
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }
      this.startTimer();
    });
  },

  beforeDestroy() {
      /* istanbul ignore next */
        const removeResizeListener = function(element, fn) {
            if (!element || !element.__resizeListeners__) return;
            element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
            if (!element.__resizeListeners__.length) {
                element.__ro__.disconnect();
            }
        };
    if (this.$el) removeResizeListener(this.$el, this.resetItemPosition);
    this.pauseTimer();
  }
};
</script>
