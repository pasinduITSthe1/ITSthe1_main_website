# Project Maintenance Script
# Performs routine maintenance tasks for the Hugo project

Write-Host "🧹 Starting project maintenance..." -ForegroundColor Cyan

# Clean build artifacts
Write-Host "🗑️  Cleaning build artifacts..." -ForegroundColor Yellow
if (Test-Path "public") {
    Remove-Item -Path "public" -Recurse -Force
    Write-Host "✅ Removed public/ folder" -ForegroundColor Green
}

if (Test-Path ".hugo_build.lock") {
    Remove-Item -Path ".hugo_build.lock" -Force
    Write-Host "✅ Removed .hugo_build.lock" -ForegroundColor Green
}

if (Test-Path "hugo_stats.json") {
    Remove-Item -Path "hugo_stats.json" -Force
    Write-Host "✅ Removed hugo_stats.json" -ForegroundColor Green
}

# Organize images
Write-Host "🎨 Organizing images..." -ForegroundColor Yellow
if (Test-Path "organize-images.ps1") {
    & ".\organize-images.ps1"
}

# Optimize images
Write-Host "⚡ Optimizing images..." -ForegroundColor Yellow
if (Test-Path "optimize-images.ps1") {
    & ".\optimize-images.ps1"
}

# Install/update dependencies
Write-Host "📦 Checking dependencies..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    npm install
    Write-Host "✅ Dependencies updated" -ForegroundColor Green
}

# Build fresh version
Write-Host "🏗️  Building fresh version..." -ForegroundColor Yellow
hugo --minify
Write-Host "✅ Build complete" -ForegroundColor Green

Write-Host "✨ Project maintenance complete!" -ForegroundColor Green
Write-Host "🚀 Ready for development or deployment!" -ForegroundColor Magenta
