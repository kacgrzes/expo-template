The navigator for web has to have flat structure.
The navigation bar takes data from the tab navigator, hovewer its structure is flat and on 
contorary to the MainTab navigator it contains only screens.

Important is to keep update webLinking and flat structure. The MainTab contains screens, and the rest of
the screens should be listed flat. 
Unlike the MainTab, the rest of the screens should be listed flat and in the link, don't pass any parameters.


on the web, the navigation bar takes data from the tab navigator, hovewer its structure is flat and on
contemporary to the MainTab navigator it contains only screens.

Important is to keep update webLinking and flat structure. The MainTab contains screens, and the rest of
the screens should be listed flat.

Unlike the MainTab, the rest of the screens should be listed flat and in the link, don't pass any parameters.

Horizontal scrolling is not supported on web so to cover this case use ScrollView. You can use it also for vertical scrolling
if you want to have scrolling fired by onMouseClick (which doesn't work on web with RN ScrollView).

for any dimensions it is recomennded to use windowWidth instead of screen width.


