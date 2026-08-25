source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

# Ruby 3.4+ dropped these from the default gem bundle; github-pages/jekyll 3.9 still
# needs them at runtime. Harmless no-ops on GitHub Pages' own (older-Ruby) build image.
gem "csv"
gem "logger"
gem "base64"
gem "webrick"
gem "bigdecimal"