const tabs = document.querySelectorAll('input[name="tab"]');
const sections = document.querySelectorAll('.tab-section');


export function showActiveSection() {
  // Hide all tab sections by removing the "active" class from each
  sections.forEach((section) => section.classList.remove("active"));

  const checkedTab = document.querySelector('input[name="tab"]:checked');

  if (checkedTab) {
    const idMap = {
      tab1: "personal-journal",
      tab2: "coding-epiphanies",
      tab3: "coding-concepts",
      tab4: "gallery"
    };

    document.getElementById(idMap[checkedTab.id])
      .classList.add("active");
  }
};

tabs.forEach((tab) => {
  tab.addEventListener("change", showActiveSection);
});