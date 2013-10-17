# Jekyll ``sorted_for`` plugin

Quick'n'dirty Jekyll plugin for sorted cycle.

## Install

Copy ``sorted_for.rb`` to ``_plugins/`` directory of your Jekyll site.

## Usage

Instead of ``for`` in templates use ``sorted_for`` and add ``sort_by`` parameter with property you want to sort by. Also supports ``reversed`` parameter as the original ``for`` tag.

```
{% sorted_for node in site.pages reversed sort_by:weight %}
  {{ node.title }}
{% endsorted_for %}
```

To use custom sort property (eg. weight as in example above) add it to YAML Front Matter of your pages - see https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter