#!/bin/bash

# Exit on error
set -e

# Paths
BUILD_DIR="storybook-static"
TARGET_REPO="../nano-grid.github.io"

# Optional: check if build directory exists
if [ ! -d "$BUILD_DIR" ]; then
  echo "Build folder '$BUILD_DIR' does not exist. Run 'build-storybook' first."
  exit 1
fi

# Optional: pull latest changes from docs repo
echo "Updating target repo..."
cd "$TARGET_REPO"
git pull origin master

# Go back to project root
cd -

# Remove old files in the docs repo (excluding .git)
echo "Clearing old files..."
rm -rf $TARGET_REPO/*

# Copy new Storybook files
echo "Copying new Storybook build..."
cp -r $BUILD_DIR/* $TARGET_REPO/

# Optional: add CNAME if needed
# echo "nano-grid.dev" > $TARGET_REPO/CNAME

# Commit and push
cd "$TARGET_REPO"
git add .
git commit -m "Deploy updated Storybook build"
git push origin master

echo "✅ Storybook deployed to nano-grid.github.io"
