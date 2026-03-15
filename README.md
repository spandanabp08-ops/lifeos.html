<!DOCTYPE html>
<html>
<head>

<title>LifeOS Dashboard</title>

<link rel="stylesheet" href="style.css">

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

</head>

<body>

<div class="app">

<!-- SIDEBAR -->

<div class="sidebar">

<h2>LifeOS</h2>

<ul>

<li onclick="showPage('dashboard')">Dashboard</li>
<li onclick="showPage('tracker')">Daily Tracker</li>
<li onclick="showPage('analytics')">Analytics</li>
<li onclick="showPage('photos')">Photo Timeline</li>
<li onclick="showPage('glowup')">Glow-Up</li>
<li onclick="showPage('learning')">Learning</li>
<li onclick="showPage('food')">Food Tracker</li>
<li onclick="showPage('screen')">Screen Time</li>

</ul>

</div>


<!-- MAIN CONTENT -->

<div class="main">

<!-- TOPBAR -->

<div class="topbar">

<div class="profile">

<img src="https://i.pravatar.cc/40">

<div>

<h4>Spandana</h4>
<p id="date"></p>

</div>

</div>

<div class="quote">

"Small progress daily becomes big success."

</div>

</div>


<!-- DASHBOARD -->

<div id="dashboard" class="page">

<h1>Dashboard</h1>

<div class="cards">

<div class="card">
<canvas id="lifeScore"></canvas>
<h3>Life Score</h3>
</div>

<div class="card">
<canvas id="healthScore"></canvas>
<h3>Health Score</h3>
</div>

<div class="card">
<canvas id="productivityScore"></canvas>
<h3>Productivity Score</h3>
</div>

<div class="card">
<canvas id="glowScore"></canvas>
<h3>Glow-Up Score</h3>
</div>

</div>

<div class="charts">

<canvas id="weeklyChart"></canvas>

</div>

</div>


<!-- DAILY TRACKER -->

<div id="tracker" class="page hidden">

<h1>Daily Tracker</h1>

<div class="tracker-grid">

<div class="tracker-card">

<h3>Daily Photo</h3>

<input type="file">

</div>

<div class="tracker-card">

<h3>Study Hours</h3>

<input type="number">

</div>

<div class="tracker-card">

<h3>Workout</h3>

<input type="number">

</div>

<div class="tracker-card">

<h3>Diet Score</h3>

<input type="number">

</div>

<div class="tracker-card">

<h3>Grooming</h3>

<input type="checkbox">

</div>

<div class="tracker-card">

<h3>Personal Development</h3>

<input type="checkbox">

</div>

</div>

</div>


<!-- ANALYTICS -->

<div id="analytics" class="page hidden">

<h1>Analytics</h1>

<div class="analytics-grid">

<canvas id="studyChart"></canvas>

<canvas id="workoutChart"></canvas>

<canvas id="dietChart"></canvas>

<canvas id="screenChart"></canvas>

</div>

</div>


<!-- PHOTO TIMELINE -->

<div id="photos" class="page hidden">

<h1>Photo Timeline</h1>

<div class="gallery">

<img src="https://picsum.photos/200">
<img src="https://picsum.photos/201">
<img src="https://picsum.photos/202">

</div>

</div>


<!-- GLOWUP -->

<div id="glowup" class="page hidden">

<h1>Glow-Up Tracker</h1>

<div class="glow-grid">

<div class="glow-card">

<h3>Daily Habits</h3>

<ul>

<li>Skincare</li>
<li>Haircare</li>
<li>Workout</li>
<li>Hydration</li>

</ul>

</div>

<div class="glow-card">

<h3>3 Month Transformation</h3>

<div class="before-after">

<img src="https://picsum.photos/300">

<img src="https://picsum.photos/301">

</div>

</div>

</div>

</div>

</div>

</div>

<script src="app.js"></script>

</body>
</html>
