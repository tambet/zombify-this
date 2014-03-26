dist:
	@rm -f zombify.zip
	@if [ ! -d "out" ]; then mkdir -p out; fi
	@cp -R manifest.json *.png *.js out/
	@zip -q -r zombify out && rm -rf out
