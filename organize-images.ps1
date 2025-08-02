# Image Organization Script
# This script organizes product images into proper folders

Write-Host "Organizing product images..." -ForegroundColor Cyan

# Define source and target paths
$sourceFolder = "static/images/Products2"
$targetFolder = "static/images/products"

# Create organized folders
$productFolders = @(
    "ai-helper",
    "crm-sme", 
    "digital-menu",
    "digital-signage",
    "erp-garment",
    "hospitality-app",
    "iptv",
    "id-scanning",
    "helpdesk"
)

# Create directories if they don't exist
foreach ($folder in $productFolders) {
    $path = "$targetFolder/$folder"
    if (!(Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force
        Write-Host "Created folder: $path" -ForegroundColor Green
    }
}

# Move and rename images
$imageMap = @{
    "AI Helper.webp" = "ai-helper/hero-image.webp"
    "CRM.webp" = "crm-sme/hero-image.webp"
    "Digital Menu.webp" = "digital-menu/hero-image.webp"
    "Digital Signage.webp" = "digital-signage/hero-image.webp"
    "ERP.webp" = "erp-garment/hero-image.webp"
    "Hospitality.webp" = "hospitality-app/hero-image.webp"
    "IPTV.webp" = "iptv/hero-image.webp"
    "Passport Scanning.webp" = "id-scanning/hero-image.webp"
    "Smart Support Ticketing.webp" = "helpdesk/hero-image.webp"
}

# Move images
foreach ($source in $imageMap.Keys) {
    $sourcePath = "$sourceFolder/$source"
    $targetPath = "$targetFolder/$($imageMap[$source])"
    
    if (Test-Path $sourcePath) {
        Move-Item -Path $sourcePath -Destination $targetPath -Force
        Write-Host "Moved: $source to $($imageMap[$source])" -ForegroundColor Yellow
    }
}

# Clean up empty Products2 folder
if (Test-Path $sourceFolder) {
    $items = Get-ChildItem $sourceFolder
    if ($items.Count -eq 0) {
        Remove-Item $sourceFolder -Force
        Write-Host "Removed empty folder: $sourceFolder" -ForegroundColor Red
    }
}

Write-Host "Image organization complete!" -ForegroundColor Green
