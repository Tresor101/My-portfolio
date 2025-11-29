// Animated background for about page
// Adds floating SVG circles for a subtle animated effect
window.addEventListener('DOMContentLoaded', function() {
	const bg = document.createElement('div');
	bg.className = 'about-bg-anim';
	bg.innerHTML = `
		<svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="none" style="position:absolute;top:0;left:0;width:100vw;height:100vh;z-index:0;">
			<circle cx="400" cy="200" r="80" fill="#2563eb22">
				<animate attributeName="cy" values="200;300;200" dur="8s" repeatCount="indefinite" />
			</circle>
			<circle cx="1200" cy="600" r="120" fill="#f59e0b22">
				<animate attributeName="cx" values="1200;1300;1200" dur="10s" repeatCount="indefinite" />
			</circle>
			<circle cx="900" cy="900" r="60" fill="#1e40af22">
				<animate attributeName="cy" values="900;800;900" dur="12s" repeatCount="indefinite" />
			</circle>
		</svg>
	`;
	document.body.prepend(bg);
});
