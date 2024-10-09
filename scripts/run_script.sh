source "$(dirname $0)/../node_modules/@mservicestech/scripts/utils.sh" || exit 1


function usage() {
  cat << END
Usage:
  ./build.sh [--help]
Where:
  help - show usage information and exit
  script - the name of the script to build
Description:
  Builds and runs the specified script.
END
}

function exit_handler() {
  printf "\nAborting\n"
  exit 1
}

function main() {
  parse_arguments "$@"
  if [ ${PROCESS_ARGUMENTS['--help']} ]; then
    usage
    exit 0
  fi

  script_name=${PROCESS_ARGUMENTS['--script']}

  if [ -z "$script_name" ]; then
    usage
    exit 1
  fi

  trap "exit_handler" SIGINT

  if ! [ -d "build" ]; then
    mkdir "build"
  fi

  printf "Cleaning up build directory...\n"
  rm "src/$script_name.js"

  # TypeScript scripts
  printf "Building TypeScript script...\n"

  transpile --input="src/$script_name.ts"

  printf "Running script\n"

  node "src/$script_name.js"
}

main "$@"
