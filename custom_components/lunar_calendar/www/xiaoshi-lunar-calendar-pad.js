import { LitElement, html, css } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

export class LunarCalendarPad extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
    };
  }

  setConfig(config) {
    this.config = {
      lunar: config?.lunar || 'sensor.lunar_calendar',
      theme: config?.theme || 'on',
      width: config?.width || '780px',
      height: config?.height || '540px',
      date: config?.date || 'date.lunar_tap_date',
      ...config
    };
  }
 
  static get styles() {
    return css`
      :host {
        display: block;
      } 
      .grid-container {
        display: grid;
        grid-template-areas: 
          "left1 head  right1"
          "left1 lunar right1"            
          "left2 lunar right2"     
          "left3 lunar right3"    
          "left4 lunar right4"      
          "left5 body1 right5" 
          "left6 body7 right6";
        grid-template-columns: 180px 400px 180px;
        grid-template-rows: 60px 20px 30px 120px 120px 60px 60px;
        width: 760px;
        height: 540px;
        gap: 10px;
      } 
      .grid-item {
        display: flex;
        position: relative;
      }
      .left1 { grid-area: left1; height: 90px; }
      .right1 { grid-area: right1; height: 90px; }
      .head { grid-area: head; height: 60px; }
      .lunar { grid-area: lunar; height: 320px; }
      .left2 { grid-area: left2; height: 30px; }
      .right2 { grid-area: right2; height: 30px; }
      .left3 { grid-area: left3; height: 120px; }
      .right3 { grid-area: right3; height: 120px; }
      .left4 { grid-area: left4; height: 120px; }
      .right4 { grid-area: right4; height: 120px; }
      .left5 { grid-area: left5; height: 60px; }
      .right5 { grid-area: right5; height: 60px; }
      .body1 { grid-area: body1; height: 60px; }
      .left6 { grid-area: left6; height: 60px; }
      .right6 { grid-area: right6; height: 60px; }
      .body7 { grid-area: body7; height: 60px; }
    `;
  }

  render() {
    if (!this.hass) {
      return html`<div>Loading...</div>`;
    }
    const headHeight1 = '320px'; 
    const headHeight12 = '120px'; 
    const headHeight9 = '90px'; 
    const headHeight6 = '60px'; 
    const headHeight3 = '30px'; 
    return html`
      <div class="grid-container">
        <div class="grid-item head">
          <xiaoshi-lunar-calendar-head \n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight6}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-head>
        </div>

        <div class="grid-item lunar">
          <xiaoshi-lunar-calendar \n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight1}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar>
        </div>

        <div class="grid-item body1">
          <xiaoshi-lunar-calendar-body1 \n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight6}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-body1>
        </div>

        <div class="grid-item body7">
          <xiaoshi-lunar-calendar-body7 \n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight6}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-body7>
        </div>
        <div class="grid-item left1">
          <xiaoshi-lunar-calendar-left1\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight9}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-left1>
        </div>
        
        <div class="grid-item right1">
          <xiaoshi-lunar-calendar-right1\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight9}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-right1>
        </div>
        
        <div class="grid-item left2">
          <xiaoshi-lunar-calendar-left2\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight3}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-left2>
        </div>
        
        <div class="grid-item right2">
          <xiaoshi-lunar-calendar-right2\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight3}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-right2>
        </div>
        
        <div class="grid-item left3">
          <xiaoshi-lunar-calendar-left3\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight12}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-left3>
        </div>
        
        <div class="grid-item right3">
          <xiaoshi-lunar-calendar-right3\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight12}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-right3>
        </div>
        
        <div class="grid-item left4">
          <xiaoshi-lunar-calendar-left4\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight12}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-left4>
        </div>
        
        <div class="grid-item right4">
          <xiaoshi-lunar-calendar-right4\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight12}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-right4>
        </div>
        
        <div class="grid-item left5">
          <xiaoshi-lunar-calendar-left5\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight6}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-left5>
        </div>
        
        <div class="grid-item right5">
          <xiaoshi-lunar-calendar-right5\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight6}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-right5>
        </div>
        
        <div class="grid-item left6">
          <xiaoshi-lunar-calendar-left6\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight6}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-left6>
        </div>
        
        <div class="grid-item right6">
          <xiaoshi-lunar-calendar-right6\n
            .hass=${this.hass}\n
            .config=${this.config}\n
            .height=${headHeight6}\n
            style="width:100%;height:100%">
          </xiaoshi-lunar-calendar-right6>
        </div>
      </div>
    `;
  }
}
customElements.define('xiaoshi-lunar-calendar-pad', LunarCalendarPad);

export class LunarCalendarPadDate extends HTMLElement {
  constructor() {
    super();
    this.config = {};
    this._hass = null;
    this._timer = null;
    this._watchdogTimer = null;
    this._midnightTimer = null;
    this._midnightRetryTimer = null;
    this._midnightRetryCount = 0;
    this._lastHourMinute = "";
    this._lastSecond = "";
    this._lastShichen = "";
    this._lastTickAt = 0;
    this._watchdogFailures = 0;
    this._lastLunarStamp = "";
    this._filterValue = "0deg";
    this._nodes = {};
    this._handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        this._stopClock();
      } else {
        this._updateTime(true);
        this._startClock();
      }
    };
    this.attachShadow({ mode: "open" });
  }

  setConfig(config = {}) {
    this.config = {
      mode: "A",
      theme: "off",
      theme_on: "rgb(150,70,70)",
      theme_off: "rgb(50,50,50)",
      ...config,
    };
    this._filterEntity = this.config.filter || "";
    this._renderShell();
    this._updateStyles();
    this._updateTime(true);
    this._updateLunar(true);
  }

  connectedCallback() {
    if (!this.shadowRoot.innerHTML) this._renderShell();
    this._updateTime(true);
    this._startClock();
    this._startWatchdog();
    document.addEventListener("visibilitychange", this._handleVisibilityChange);
    this._scheduleMidnightRefresh();
  }

  disconnectedCallback() {
    this._stopClock();
    this._stopWatchdog();
    document.removeEventListener("visibilitychange", this._handleVisibilityChange);
    if (this._midnightTimer) {
      window.clearTimeout(this._midnightTimer);
      this._midnightTimer = null;
    }
    if (this._midnightRetryTimer) {
      window.clearTimeout(this._midnightRetryTimer);
      this._midnightRetryTimer = null;
    }
  }

  set hass(hass) {
    this._hass = hass;
    if (this._filterEntity) {
      const filterState = hass?.states?.[this._filterEntity];
      const nextFilter = filterState ? `${filterState.state}deg` : "0deg";
      if (nextFilter !== this._filterValue) {
        this._filterValue = nextFilter;
        this._updateStyles();
      }
    }

    const lunarEntity = this.config?.entity || "sensor.lunar_calendar";
    const lunarState = hass?.states?.[lunarEntity];
    const stamp = `${lunarState?.last_changed || ""}|${lunarState?.last_updated || ""}`;
    if (stamp !== this._lastLunarStamp) {
      this._lastLunarStamp = stamp;
      this._lunarState = lunarState;
      this._updateLunar();
    }
  }

  get hass() {
    return this._hass;
  }

  _renderShell() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 264px;
          height: 168px;
          color: rgba(247,250,255,0.98);
          --text-color: rgba(247,250,255,0.98);
          --muted-color: rgba(224,232,242,0.8);
          --soft-color: rgba(214,224,236,0.64);
          --gold-color: rgba(222,195,139,0.86);
          --gold-soft: rgba(222,195,139,0.34);
          --ink-shadow: 0 2px 7px rgba(0,0,0,0.46), 0 1px 1px rgba(0,0,0,0.7);
          --time-filter: none;
          font-family: var(--paper-font-body1_-_font-family, inherit);
          overflow: visible;
        }
        ha-card {
          width: 264px;
          height: 168px;
          box-sizing: border-box;
          padding: 0;
          background:
            linear-gradient(135deg, rgba(13,23,29,0.25), rgba(5,12,17,0.25)) !important;
          box-shadow:
            0 10px 26px rgba(0,0,0,0.22),
            inset 0 1px 0 rgba(255,255,255,0.08) !important;
          border: none !important;
          border-radius: 8px;
          cursor: pointer;
          color: var(--text-color);
          overflow: visible !important;
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
        }
        .slip {
          position: relative;
          width: 264px;
          height: 168px;
          box-sizing: border-box;
          padding: 8px 12px 9px 12px;
          overflow: hidden;
          border-radius: 8px;
        }
        .slip::before {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
          top: 63px;
          width: auto;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(222,195,139,0.68) 22%, rgba(247,250,255,0.36) 50%, rgba(222,195,139,0.58) 78%, transparent);
          box-shadow: 0 0 10px rgba(222,195,139,0.15);
          pointer-events: none;
        }
        .slip::after {
          content: "";
          position: absolute;
          right: 10px;
          top: 14px;
          width: 34px;
          height: 48px;
          border-right: 1px solid rgba(222,195,139,0.34);
          border-top: 1px solid rgba(222,195,139,0.18);
          transform: skewY(-12deg);
          opacity: 0.55;
          pointer-events: none;
        }
        .grid-container,
        .row {
          min-width: 0;
        }
        .grid-container {
          display: grid;
          grid-template-areas:
            "time"
            "solar"
            "lunar"
            "line"
            "bottom";
          grid-template-columns: 240px;
          grid-template-rows: 58px 25px 25px 8px 35px;
          align-items: center;
          row-gap: 0;
          font-size: 14px;
          font-weight: 620;
          letter-spacing: 0;
          text-shadow: var(--ink-shadow);
          font-variant-numeric: tabular-nums;
          font-feature-settings: "tnum";
        }
        .row {
          display: grid;
          align-items: center;
          column-gap: 7px;
        }
        .solar-row {
          grid-area: solar;
          grid-template-columns: 78px 58px 90px;
          border-bottom: 1px solid rgba(222,195,139,0.18);
        }
        .lunar-row {
          grid-area: lunar;
          grid-template-columns: 78px 82px 66px;
        }
        #time {
          grid-area: time;
          font-size: 47px;
          font-weight: 380;
          line-height: 0.94;
          align-self: start;
          margin-bottom: 0;
          text-align: center;
          white-space: nowrap;
          overflow: visible;
          color: var(--text-color);
          filter: var(--time-filter);
          text-shadow: 0 3px 11px rgba(0,0,0,0.45), 0 1px 1px rgba(0,0,0,0.72);
        }
        #time-main,
        #time-sec {
          display: inline-block;
          font: inherit;
          line-height: inherit;
        }
        #time-sec {
          width: 2ch;
          text-align: left;
        }
        #date {
          color: rgba(246,249,255,0.9);
        }
        #week {
          color: rgba(246,249,255,0.9);
          text-align: left;
        }
        #jieqi {
          color: var(--gold-color);
          text-align: right;
        }
        #year {
          color: rgba(235,242,250,0.84);
        }
        #mon {
          color: rgba(235,242,250,0.84);
          text-align: left;
        }
        #day {
          color: var(--gold-color);
          text-align: right;
        }
        #line {
          grid-area: line;
          height: 1px;
          margin: 3px 0 4px;
          background: linear-gradient(90deg, rgba(247,250,255,0.18), rgba(222,195,139,0.42) 45%, rgba(247,250,255,0.12));
        }
        .bottom-row {
          grid-area: bottom;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.78fr);
          column-gap: 14px;
          position: relative;
        }
        .bottom-row::before {
          content: "";
          position: absolute;
          left: calc(56% - 7px);
          top: 2px;
          bottom: 2px;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(222,195,139,0.28), transparent);
        }
        #shengri {
          font-size: 12px;
          line-height: 15px;
          color: rgba(248,251,255,0.9);
          white-space: normal;
          overflow: visible;
          text-overflow: clip;
        }
        #jieri {
          font-size: 12px;
          line-height: 15px;
          color: rgba(248,251,255,0.86);
          white-space: normal;
          overflow: visible;
          text-overflow: clip;
        }
        .text {
          min-width: 0;
          color: var(--muted-color);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        ha-card:active {
          transform: translateY(1px);
        }
        @media (prefers-reduced-motion: reduce) {
          ha-card:active { transform: none; }
        }
      </style>
      <ha-card>
        <div class="slip">
          <div class="grid-container">
            <div id="time"><span id="time-main"></span><span>:</span><span id="time-sec"></span></div>
            <div class="row solar-row">
              <div id="date" class="text"></div>
              <div id="week" class="text"></div>
              <div id="jieqi" class="text"></div>
            </div>
            <div class="row lunar-row">
              <div id="year" class="text"></div>
              <div id="mon" class="text"></div>
              <div id="day" class="text"></div>
            </div>
            <div id="line"></div>
            <div class="bottom-row">
              <div id="shengri" class="text"></div>
              <div id="jieri" class="text"></div>
            </div>
          </div>
        </div>
      </ha-card>
    `;
    this._nodes = {
      card: this.shadowRoot.querySelector("ha-card"),
      time: this.shadowRoot.getElementById("time"),
      timeMain: this.shadowRoot.getElementById("time-main"),
      timeSec: this.shadowRoot.getElementById("time-sec"),
      date: this.shadowRoot.getElementById("date"),
      week: this.shadowRoot.getElementById("week"),
      jieqi: this.shadowRoot.getElementById("jieqi"),
      year: this.shadowRoot.getElementById("year"),
      mon: this.shadowRoot.getElementById("mon"),
      day: this.shadowRoot.getElementById("day"),
      shengri: this.shadowRoot.getElementById("shengri"),
      jieri: this.shadowRoot.getElementById("jieri"),
    };
    this._nodes.card.addEventListener("click", () => this._showPopup());
  }

  _updateTime(force = false) {
    const now = new Date();
    const hourMinuteText = [
      now.getHours().toString().padStart(2, "0"),
      now.getMinutes().toString().padStart(2, "0"),
    ].join(":");
    const secondText = now.getSeconds().toString().padStart(2, "0");
    const shichenText = this._getShichen(now);
    this._lastTickAt = Date.now();
    if (force || hourMinuteText !== this._lastHourMinute) {
      this._lastHourMinute = hourMinuteText;
      this._setText("timeMain", hourMinuteText);
    }
    if (force || secondText !== this._lastSecond) {
      this._lastSecond = secondText;
      this._setText("timeSec", secondText);
    }
    if (force || shichenText !== this._lastShichen) {
      this._lastShichen = shichenText;
      this._setText("day", shichenText);
    }
  }

  _startClock() {
    if (document.visibilityState === "hidden") return;
    this._stopClock();
    this._scheduleNextTick();
  }

  _stopClock() {
    if (this._timer) {
      window.clearTimeout(this._timer);
      this._timer = null;
    }
  }

  _scheduleNextTick() {
    if (!this.isConnected || document.visibilityState === "hidden") return;
    const now = Date.now();
    const delay = Math.max(80, 1000 - (now % 1000) + 8);
    this._timer = window.setTimeout(() => {
      this._timer = null;
      this._updateTime();
      this._scheduleNextTick();
    }, delay);
  }

  _startWatchdog() {
    if (this._watchdogTimer) return;
    this._watchdogFailures = 0;
    this._watchdogTimer = window.setInterval(() => this._runWatchdog(), 25000);
  }

  _stopWatchdog() {
    if (this._watchdogTimer) {
      window.clearInterval(this._watchdogTimer);
      this._watchdogTimer = null;
    }
    this._watchdogFailures = 0;
  }

  _runWatchdog() {
    if (!this.isConnected || document.visibilityState === "hidden") return;
    const card = this._nodes.card;
    const rect = card?.getBoundingClientRect?.();
    const style = card ? getComputedStyle(card) : null;
    const staleClock = this._lastTickAt && Date.now() - this._lastTickAt > 4000;
    const badRender =
      !card ||
      !rect ||
      rect.width < 180 ||
      rect.height < 100 ||
      rect.top < -20 ||
      rect.left < -20 ||
      style?.display === "none" ||
      style?.visibility === "hidden" ||
      style?.opacity === "0";
    if (!badRender && !staleClock) {
      this._watchdogFailures = 0;
      return;
    }
    this._watchdogFailures += 1;
    if (this._watchdogFailures >= 2) this._reloadOnce("lunar-calendar-pad-watchdog");
  }

  _reloadOnce(reason) {
    const key = "xiaoshi_lunar_calendar_pad_reload_at";
    const now = Date.now();
    try {
      const last = Number(sessionStorage.getItem(key) || 0);
      if (last && now - last < 10 * 60 * 1000) return;
      sessionStorage.setItem(key, String(now));
      sessionStorage.setItem("xiaoshi_lunar_calendar_pad_reload_reason", reason);
    } catch (e) {
      // Ignore storage failures and still try the safest recovery path.
    }
    window.location.reload();
  }

  _updateLunar() {
    this._setText("date", this._getAttribute(this._lunarState, "今天的阳历日期.日期1"));
    this._setText("week", this._getAttribute(this._lunarState, "今天的阳历日期.星期1"));
    this._setText("jieqi", this._getAttribute(this._lunarState, "节气.节气"));
    this._setText("year", this._getAttribute(this._lunarState, "今天的农历日期.年"));
    const lunarDate = this._getAttribute(this._lunarState, "今天的农历日期.日期");
    this._setText("mon", lunarDate ? lunarDate.slice(-4) : "");
    this._setText("shengri", this._getAttribute(this._lunarState, "最近的生日.0"));
    this._setText("jieri", this._getAttribute(this._lunarState, "最近的节日.0"));
  }

  _scheduleMidnightRefresh() {
    if (this._midnightTimer) {
      window.clearTimeout(this._midnightTimer);
    }
    const now = new Date();
    const next = new Date(now);
    next.setHours(0, 0, 8, 0);
    if (next <= now) next.setDate(next.getDate() + 1);
    this._midnightTimer = window.setTimeout(() => this._runMidnightRefresh(), next.getTime() - now.getTime());
  }

  _runMidnightRefresh() {
    this._updateTime(true);
    this._requestBackendRefresh();
    this._midnightRetryCount = 0;
    this._verifyMidnightRefresh();
    this._scheduleMidnightRefresh();
  }

  _requestBackendRefresh() {
    const lunarEntity = this.config?.entity || "sensor.lunar_calendar";
    try {
      this._hass?.callService?.("homeassistant", "update_entity", {
        entity_id: lunarEntity,
      });
    } catch (e) {
      // The normal hass state push will still update this card.
    }
  }

  _verifyMidnightRefresh() {
    const expected = this._todayDateText();
    if (!expected || this._nodes.date?.textContent === expected) return;
    if (this._midnightRetryCount >= 8) return;
    this._midnightRetryCount += 1;
    this._midnightRetryTimer = window.setTimeout(() => {
      this._requestBackendRefresh();
      this._updateLunar();
      this._verifyMidnightRefresh();
    }, 15000);
  }

  _todayDateText() {
    const now = new Date();
    return `${(now.getMonth() + 1).toString().padStart(2, "0")}月${now.getDate().toString().padStart(2, "0")}日`;
  }

  _setText(name, value) {
    const node = this._nodes[name];
    if (!node) return;
    const next = value == null ? "" : String(value);
    if (node.textContent !== next) node.textContent = next;
  }

  _updateStyles() {
    this.style.setProperty("--time-filter", `hue-rotate(${this._filterValue})`);
  }

  _evaluateTheme() {
    try {
      if (typeof this.config.theme === "function") return this.config.theme();
      if (typeof this.config.theme === "string" && this.config.theme.includes("theme()")) {
        return new Function("return theme()")();
      }
      return this.config.theme || "off";
    } catch (e) {
      return "off";
    }
  }

  _getShichen(date = new Date()) {
    const tzArr = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥", "子"];
    const skArr = ["一", "二", "三", "四", "五", "六", "七", "八"];
    const h = date.getHours();
    const m = date.getMinutes();
    const shichen = tzArr[parseInt((h + 1) / 2)] + "时";
    const shike = skArr[parseInt(m / 15) + Math.abs((h % 2) - 1) * 4] + "刻";
    return shichen + shike;
  }

  _getAttribute(state, path) {
    return path.split(".").reduce((obj, key) => (obj || {})[key], state?.attributes || {}) || "";
  }

  _handleClick() {
    const hapticEvent = new Event("haptic", {
      bubbles: true,
      cancelable: false,
      composed: true,
    });
    hapticEvent.detail = "light";
    this.dispatchEvent(hapticEvent);
  }

  _showPopup() {
    this._handleClick();
    const popupContent = this.config.popup_content || {
      type: "custom:xiaoshi-lunar-calendar-pad",
      theme: this._evaluateTheme(),
    };
    const surface = this.config.popup_surface || "rgba(150,150,150,0.5)";
    const scrim = this.config.popup_scrim || "rgba(0,0,0,0.35)";
    const blur = this.config.popup_backdrop_filter || "blur(10px) brightness(1)";
    const popupStyle =
      this.config.popup_style ||
      `
    --popup-min-width: 800px;
    --ha-dialog-scrim-backdrop-filter: ${blur};
    --mdc-dialog-scrim-color: ${scrim};
    ha-dialog{
      --dialog-content-position: unset;
      --ha-dialog-surface-background: ${surface};
      --ha-card-background: ${surface};
      --card-background-color: ${surface};
    }
  `;
    const payload = {
      style: popupStyle,
      content: popupContent,
      uix: {
        style: {
          "ha-dialog $ wa-dialog $:": `
          dialog {
            background: ${surface} !important;
            border: 0 !important;
          }
          dialog::backdrop {
            background: ${scrim} !important;
            backdrop-filter: ${blur} !important;
            -webkit-backdrop-filter: ${blur} !important;
          }
        `,
        },
      },
    };
    try {
      window.browser_mod?.service?.("popup", payload);
    } catch (e) {
      try {
        window.browser_mod?.service?.("popup", { style: popupStyle, content: popupContent });
        setTimeout(() => this._patchPopupSurface(surface, scrim, blur), 60);
      } catch (e2) {
        console.warn("Popup failed:", e2);
      }
    }
  }

  _patchPopupSurface(surface, scrim, blur) {
    const dialogs = Array.from(document.querySelectorAll("ha-dialog"));
    const haDialog = dialogs[dialogs.length - 1];
    if (!haDialog) return;
    const sr1 = haDialog.shadowRoot;
    const wa = sr1 && sr1.querySelector("wa-dialog");
    const sr2 = wa && wa.shadowRoot;
    const dlg = sr2 && sr2.querySelector("dialog");
    if (!dlg) return;
    dlg.style.background = surface;
    dlg.style.border = "0";
    const styleId = "xiaoshi-popup-backdrop-style";
    if (sr2 && !sr2.querySelector(`#${styleId}`)) {
      const st = document.createElement("style");
      st.id = styleId;
      st.textContent = `
      dialog::backdrop {
        background: ${scrim} !important;
        backdrop-filter: ${blur} !important;
        -webkit-backdrop-filter: ${blur} !important;
      }
    `;
      sr2.appendChild(st);
    }
  }
}
customElements.define('xiaoshi-lunar-calendar-pad-date', LunarCalendarPadDate);
