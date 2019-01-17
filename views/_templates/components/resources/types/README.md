# Resource types

This is a folder that definitely needs to be refactored. The problem right now is that I do not have a clear understanding of how to dynamically generate resource lists using YAML keys inside of a page. For example, this is one way I can see this working:

In the YAML, specify which resources we want to include:

```
resources:
  - general
  - brewing
  - methods
  - ...etc
```

We can then loop over this list and output each of the resources into the correct layout:

```html
{% for resource in resources %}
  // "resource" in this instance would be something like "resources.general"
  // that is, something that corresponds to structured data that already exists
  // in `/views/data`
  {% for topic in resource %}
    {% include "components/resources/list.njk" %}
  {% endfor %}
{% endfor %}

```

It would be nice to avoid having the logic of looping over `/components/resources/types` in order to display the resources that we want. It seems a little heavy-handed. This implementation will work for right now but should be changed as my knowledge of Nunjucks grows. 
