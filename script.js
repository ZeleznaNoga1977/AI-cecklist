<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ethical Checklist for AI in EU Grant Writing</title>
  <style>
    body { font-family: sans-serif; margin: 20px; }
    h1 { font-size: 24px; }
    .checklist { list-style: none; padding: 0; }
    .checklist li { margin-bottom: 15px; border-bottom: 1px solid #ccc; padding-bottom: 10px; }
    .checklist li label { font-size: 18px; display: block; }
    .checklist li input[type="checkbox"] { margin-right: 10px; }
    .section { margin-bottom: 30px; }
    .section-title { font-weight: bold; font-size: 20px; margin-bottom: 10px; }
  </style>
</head>
<body>
  <h1>Ethical Checklist for AI in EU Grant Writing</h1>

  <div class="section">
    <div class="section-title">1. Transparency</div>
    <ul class="checklist">
      <li>
        <input type="checkbox" id="transparency-1">
        <label for="transparency-1">Clearly disclose in the proposal when and how AI was used.</label>
      </li>
      <li>
        <input type="checkbox" id="transparency-2">
        <label for="transparency-2">Maintain detailed records of AI-generated content and revisions.</label>
      </li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">2. Data Privacy (GDPR Compliance)</div>
    <ul class="checklist">
      <li>
        <input type="checkbox" id="privacy-1">
        <label for="privacy-1">Ensure anonymized data inputs when interacting with AI.</label>
      </li>
      <li>
        <input type="checkbox" id="privacy-2">
        <label for="privacy-2">Regularly audit and document data-handling practices.</label>
      </li>
      <li>
        <input type="checkbox" id="privacy-3">
        <label for="privacy-3">Store all project-related information securely, respecting GDPR standards.</label>
      </li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">3. Fairness & Bias</div>
    <ul class="checklist">
      <li>
        <input type="checkbox" id="fairness-1">
        <label for="fairness-1">Review AI-generated text specifically for inclusive language and potential biases.</label>
      </li>
      <li>
        <input type="checkbox" id="fairness-2">
        <label for="fairness-2">Train staff to identify and correct biased or discriminatory content.</label>
      </li>
      <li>
        <input type="checkbox" id="fairness-3">
        <label for="fairness-3">Diversify AI prompts to minimize bias in outputs.</label>
      </li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">4. Accuracy & Reliability</div>
    <ul class="checklist">
      <li>
        <input type="checkbox" id="accuracy-1">
        <label for="accuracy-1">Cross-check all AI-generated facts, figures, and statistics.</label>
      </li>
      <li>
        <input type="checkbox" id="accuracy-2">
        <label for="accuracy-2">Include verification steps involving subject-matter experts.</label>
      </li>
      <li>
        <input type="checkbox" id="accuracy-3">
        <label for="accuracy-3">Clearly flag AI-generated content requiring human review before finalization.</label>
      </li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">5. Human Accountability</div>
    <ul class="checklist">
      <li>
        <input type="checkbox" id="accountability-1">
        <label for="accountability-1">Clearly define roles and responsibilities between AI and human team members.</label>
      </li>
      <li>
        <input type="checkbox" id="accountability-2">
        <label for="accountability-2">Establish mandatory human checkpoints for review and approval.</label>
      </li>
      <li>
        <input type="checkbox" id="accountability-3">
        <label for="accountability-3">Train staff regularly on the limitations and responsible use of AI.</label>
      </li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">6. Intellectual Property</div>
    <ul class="checklist">
      <li>
        <input type="checkbox" id="ip-1">
        <label for="ip-1">Run AI-generated outputs through plagiarism detection software.</label>
      </li>
      <li>
        <input type="checkbox" id="ip-2">
        <label for="ip-2">Ensure prompts are original and avoid using copyrighted content.</label>
      </li>
      <li>
        <input type="checkbox" id="ip-3">
        <label for="ip-3">Maintain thorough records of references, citations, and sources used.</label>
      </li>
    </ul>
  </div>

  <script>
    // Save checkbox states using local storage so progress persists on reload
    document.addEventListener('DOMContentLoaded', function() {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === 'true') {
          checkbox.checked = true;
        }
        checkbox.addEventListener('change', function() {
          localStorage.setItem(checkbox.id, checkbox.checked);
        });
      });
    });
  </script>
</body>
</html>
