#!/bin/bash
#bundle打包脚本,生成打包文件记录
directoryPath="./dist/assets"
outputFilePath="./dist/bundle.json"
mainfestFilePath="./dist/mainfest.json"
fileTypes=("js" "css")

declare -a filesArray

timestamp=$(date +%m%d%H%M)

for fileType in "${fileTypes[@]}"; do
 while IFS= read -r -d '' file; do
    fileName=$(basename "$file")
    filesArray+=("\"$fileName\",")
 done < <(find "$directoryPath" -type f -name "*.$fileType" -print0)
done

dateContent="{\"t\": \"$timestamp\"}"
jsonContent="{\"t\": \"$timestamp\",\"files\":[${filesArray[*]}]}"

fixedJsonContent="${jsonContent%,*}"
fixedJsonContent="${fixedJsonContent%,}]}"

echo "$dateContent" > "$mainfestFilePath"
echo "$fixedJsonContent" > "$outputFilePath"
