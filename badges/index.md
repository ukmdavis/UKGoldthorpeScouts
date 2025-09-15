---
layout: default
title: Badges
---
<h1>Badge Ideas</h1>
<p>Here are some programme ideas across the Group. Your leaders can tailor these to help you earn badges.</p>

<div class="grid">
  {% for s in site.sections %}
  <div class="card">
    <h2>{{ s.title }}</h2>
    {% if s.badge_ideas %}
      <ul>
        {% for idea in s.badge_ideas %}
          <li>{{ idea }}</li>
        {% endfor %}
      </ul>
    {% else %}
      <p>No ideas listed yet.</p>
    {% endif %}
    <p><a class="button secondary" href="{{ s.url | relative_url }}">View {{ s.title }}</a></p>
  </div>
  {% endfor %}
</div>
