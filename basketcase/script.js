document.addEventListener("DOMContentLoaded", () => {
	const yearEl = document.getElementById("year");
	if (yearEl) {
		yearEl.textContent = String(new Date().getFullYear());
	}

	// App Store "coming soon" handler for all download buttons
	const appStoreBtns = [
		document.getElementById("app-store-btn"),
		document.getElementById("hero-app-store-btn"),
		document.getElementById("final-app-store-btn"),
	];

	appStoreBtns.forEach((btn) => {
		if (btn) {
			btn.addEventListener("click", () => {
				alert("Coming Soon! The app will be available on the App Store shortly.");
			});
		}
	});

	const chapterItems = document.querySelectorAll(".chapter-list article");
	const chapterImage = document.getElementById("chapter-image");
	if (chapterItems.length && chapterImage) {
		let activeIndex = 0;
		let rotationTimer;

		const setChapter = (index) => {
			const clampedIndex = index % chapterItems.length;
			chapterItems.forEach((item) => item.classList.remove("selected"));
			const nextItem = chapterItems[clampedIndex];
			nextItem.classList.add("selected");

			const imageSrc = nextItem.dataset.image;
			const altText = nextItem.dataset.alt || chapterImage.alt;

			if (imageSrc) {
				chapterImage.src = imageSrc;
			}
			chapterImage.alt = altText;
			activeIndex = clampedIndex;
		};

		const restartTimer = () => {
			clearInterval(rotationTimer);
			rotationTimer = setInterval(() => {
				setChapter(activeIndex + 1);
			}, 4500);
		};

		chapterItems.forEach((item, index) => {
			item.addEventListener("click", () => {
				setChapter(index);
				restartTimer();
			});
		});

		setChapter(0);
		restartTimer();
	}
});
