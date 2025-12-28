#!/bin/bash
# Migrate to Standalone Components

echo "Starting standalone migration..."

# Run Angular schematic
ng generate @angular/core:standalone

echo ""
echo "Migration complete. Manual steps:"
echo "1. Review changes in each component"
echo "2. Update imports in standalone components"
echo "3. Remove empty NgModules"
echo "4. Update bootstrap in main.ts"
