const app = document.getElementById('app');
const main = document.querySelector('main');

// 首页内容
const homeContent = `
<div class="jumbotron">
    <div class="container">
        <h1 class="mainHeading">Welcome to Empower Ability Labs!</h1>
        <p>Empower Ability Labs is a hub for learning and empathy-building.  We are on a mission to foster understanding and promote inclusive digital experiences for all. We offer a range of services designed to promote accessibility awareness, drive inclusivity, and enhance the user experience. And help you find answers on How do people with disabilities use technology and navigate the digital world? What tools do they employ? </p>
    </div>
</div>

<div class="container">
    <!-- Example row of columns -->
    <button id="openModalBtn">Meet the Empower Community!</button>
    <div id="communityModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" tabindex="-1">
        <div class="modal-content">
            <h2 id="modalTitle">Community Steering Committee</h2>
            <p>We get an aha! moment from product managers who try our services for the first time. We offered many lab days, workshops and usability testing services to many companies and organizations including:</p>
            <ul>
                <li>McGill University</li>
                <li>Walmart.ca</li>
                <li>Apple.ca</li>
                <li>Google.ca</li>
                <li>Government of Canada</li>
            </ul>
            <button id="closeModalBtn">Close</button>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <h2>Our Approach</h2>
            <p>
            Empower Ability Labs utilizes a hands-on approach to raise awareness and promote empathy. Our immersive workshops and lab days provide participants with a unique opportunity to step into the shoes of individuals with disabilities and navigate the world from their perspective.
            </p>
            <a href="https://www.google.com/search/howsearchworks/our-approach/">Learn More</a>
        </div>
        <div class="col-md-4">
            <h2>Services </h2>
            <p>
            Promote accessibility awareness and enhance the user experience. 
            </p>
            <ul>
                <li>Empathy lab days and workshops</li>
                <li>Go beyond WCAG compliance!</li>
                <li>Inspirational speakers.</li>
            </ul>
            <a href="https://www.elevenways.be/en/services">Learn More</a> 
        </div>
        <div class="col-md-4">
            <h2>Testimonials</h2>
            <p>
            Invite a speaker with disabilities to share their unique journey. This captivating addition to your upcoming event will offer insights that resonate,  inspire, educate, and enrich your team’s understanding of inclusion.
            </p>
            <a href="https://dictionary.cambridge.org/us/dictionary/english/testimonial">Learn More</a>
        </div>
    </div>

        <hr>

      </div> <!-- /container -->
`;

const services = `
<div class="jumbotron">
    <div class="container">
        <h1 class="mainHeading">Welcome to Empower Ability Labs!</h1>
        <div class="mainContainer">
            <div class="mainContent">
                <p>Dedicated space or programs designed to cultivate empathy and understanding among individuals towards the challenges faced by people with disabilities in using technology and interacting with various environments.</p>
                <img src="images/services.png" alt="services">
            </div>
        </div>
    </div>
</div>
    <div class="container">
        <h2>Empathy Lab days and workshops</h2>
        <p>The lab days and workshops typically provide hands-on experiences, simulations, and interactions with assistive technologies, tools, and scenarios that replicate the obstacles individuals with disabilities encounter daily.</p>
        <h2>Inspirational speakers</h2>
        <p>Invite a speaker with disabilities to share their unique journey. This captivating addition to your upcoming event will offer insights that resonate, inspire, educate, and enrich your team’s understanding of inclusion.</p>
        <h2>Usability testing</h2>
        <p>Go beyond WCAG! Involve individuals with disabilities in usability testing to gather valuable insights for refining product strategy and identifying accessibility concerns at an early stage when solutions are more feasible and cost-effective. You have access to a diverse community of people with disabilities, who use various assistive technologies. With technical expertise ranging from novice to expert, our community can support your product lifecycle from user research, to design, to QA.</p>
        <hr>
    </div>

`;

const schedule = `
<div class="jumbotron">
    <div class="container">
        <h1 class="mainHeading">Welcome to Empower Ability Labs!</h1>
        <div class="mainContainer">
            <div class="mainContent">
                <p>At Empower Ability Labs, we are dedicated to cultivating empathy and driving positive change through immersive experiences. Fill out the form below and we’ll get back to you as soon as we can to schedule a call with our sales team!</p>
                <img src="images/scheduleacall.png" alt="schedule">
            </div>
        </div>
    </div>
</div>
    <form class="container" id="scheduleForm">
        <fieldset>
            <legend>Contact Information</legend>
        <div>
            <label for="businessName">Business Name:</label>
            <input type="text" id="businessName" name="businessName">
        </div>
        <div>
            <label for="phoneNumber">Phone number (613-123-1234):</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="e.g. 613-123-1234">
        </div>
        <div>
            <label for="email">Email: (required)</label>
            <input type="email" id="email" name="email" required placeholder="e.g. sampleUser@gmail.com">
        </div>
        </fieldset>
          <fieldset>
            <legend>What would you like to talk about:</legend>

            <div class="checkbox-container">
                <input type="checkbox" id="awareness" name="topics" value="awareness">
                <label for="awareness">Awareness lab days and workshops</label>
            </div>

            <div class="checkbox-container">
                <input type="checkbox" id="invite" name="topics" value="invite">
                <label for="invite">Invite a speaker with disabilities to your event</label>
            </div>

            <div class="checkbox-container">
                <input type="checkbox" id="usability" name="topics" value="usability">
                <label for="usability">Usability testing</label>
            </div>
        </fieldset>
          <!-- 文本区域容器，初始状态为隐藏 -->
        <div id="eventDetailsContainer" style="display: none; margin-top: 10px;">
            <label for="eventDetails">Please tell us about your event:</label>
            <br>
            <textarea id="eventDetails" name="eventDetails" rows="4" cols="50"></textarea>
        </div>
        <div class="custom-switch">
        <input type="checkbox" id="emailSwitch" class="hidden-checkbox" checked>
        <label for="emailSwitch" class="custom-switch-label">
            <span class="switch-sprite" aria-hidden="true"></span>
            <span class="switch-text">Receive emails about updates and services</span>
        </label>
        </div>
        <button type="submit">Schedule a call</button>
    </form>
    <hr>
    </div> <!-- /container -->
`;



const routes = {
    '#home': { title: 'Empower Ability Labs Home Page', content: homeContent },
    '#services': { title: 'Empower Ability Labs Service Page', content: services },
    '#schedule': { title: 'Empower Ability Labs Schedule A Call Page', content: schedule },
  };

  function setupEventDetailsToggle() {
    // 获取复选框和文本区域容器的引用
    const inviteCheckbox = document.getElementById('invite');
    const eventDetailsContainer = document.getElementById('eventDetailsContainer');
  
    // 确保元素存在
    if (inviteCheckbox && eventDetailsContainer) {
      // 添加事件监听器，监测复选框的变化
      inviteCheckbox.addEventListener('change', function() {
        if (this.checked) {
          // 如果复选框被选中，显示文本区域容器
          eventDetailsContainer.style.display = 'block';
          // 将焦点设置到文本区域
          document.getElementById('eventDetails').focus();
        } else {
          // 如果复选框未选中，隐藏文本区域容器
          eventDetailsContainer.style.display = 'none';
        }
      });
    }
  }

  function setupFormSubmission() {
    const form = document.getElementById('scheduleForm');
  
    if (!form) return;
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // 阻止默认提交（防止刷新页面）
  
      if (form.checkValidity()) {
        // 模拟提交成功（你可以放 AJAX 或真实提交逻辑）
        alert("Thank you! Your message has been sent successfully.");
        form.reset(); // 清空表单
      } else {
        alert("Please fill out all required fields correctly.");
      }
    });
  }

  function setupHomeModal() {
    const openBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('communityModal');
    const closeBtn = document.getElementById('closeModalBtn');
  
    if (openBtn && modal && closeBtn) {
      const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  
      openBtn.addEventListener('click', () => {
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
  
        // 获取所有 modal 内的可聚焦元素
        const focusableElements = modal.querySelectorAll(focusableSelectors);
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
  
        // 初始焦点设置到第一个元素
        first.focus();
  
        modal.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            closeModal();
          }
  
          if (e.key === 'Tab') {
            // Tab 键处理焦点循环
            if (e.shiftKey) {
              if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
              }
            } else {
              if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
              }
            }
          }
        });
  
        function closeModal() {
          modal.classList.remove('show');
          modal.setAttribute('aria-hidden', 'true');
          openBtn.focus(); // 焦点返回原按钮
        }
  
        closeBtn.addEventListener('click', closeModal);
      });
    }
  }
  
  
function router() {
    const hash = window.location.hash || '#home';
    const route = routes[hash] || { title: '页面未找到', content: '<h1>页面未找到</h1>' };

    // 更新页面内容
    main.innerHTML = route.content;

    // 更新页面标题
    document.title = route.title;

    if (hash === '#schedule') {
        setupEventDetailsToggle();
        setupFormSubmission();
    } else if (hash === '#home') {
        setupHomeModal();
    }
}


window.addEventListener('hashchange', router);
window.addEventListener('load', router);
  