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
    <button>Meet the Empower Community!</button>
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
            Empathy lab days and workshops
            Go beyond WCAG compliance!
            Inspirational speakers. 
            </p>
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
            <input type="tel" id="phoneNumber" name="phoneNumber">
        </div>
        <div>
            <label for="email" required>Email: (required)</label>
            <input type="email" id="email" name="email">
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
        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
            <label class="form-check-label" for="flexSwitchCheckChecked">Receive emails about updates and services </label>
        </div>
        <button type="submit">Schedule a call</button>
    </form>
    <!-- 消息显示区域 -->
    <div id="messageContainer" style="display: none; margin-top: 10px;"></div>

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
  
  function router() {
    const hash = window.location.hash || '#home';
    const route = routes[hash] || { title: '页面未找到', content: '<h1>页面未找到</h1>' };
  
    // 更新页面内容
    main.innerHTML = route.content;
  
    // 更新页面标题
    document.title = route.title;
  
//     // 设置焦点到第一个可交互元素
//     const firstInteractiveElement = app.querySelector('input, textarea, button, a');
//     if (firstInteractiveElement) {
//       firstInteractiveElement.focus();
//     }
    if (hash === '#schedule') {
        setupEventDetailsToggle();
    }
  }
  
  

  window.addEventListener('hashchange', router);
  window.addEventListener('load', router);
  