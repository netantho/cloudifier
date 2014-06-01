# Directives

angular.module('cloudifier.directives', [])
  .directive('appVersion', ['version', (version) ->
    return (scope, elm, attrs) ->
      elm.text(version)
  ])
