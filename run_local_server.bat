@echo off
rem -----------------------------------------------------------------
rem  Serve the ESCAPE prototype locally (no install required)
rem -----------------------------------------------------------------
pushd %~dp0
cd dist
if exist .\quick-view.html (
    echo Starting local server on http://localhost:8000 ...
    start "" http://localhost:8000/quick-view.html
    python -m http.server 8000
) else (
    echo quick-view.html not found in the dist folder.
    pause
)
popd
