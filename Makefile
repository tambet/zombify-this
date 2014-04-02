default: dist

dist: clean
	@if [ ! -d "out" ]; then mkdir -p out; fi
	@cp -R manifest.json *.png *.js *.css sounds out/
	@zip -q -r zombify out && rm -rf out

clean:
	@rm -f zombify.zip
