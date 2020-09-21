package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( features = {"C:\\Users\\HYperscale\\Workspace\\com\\src\\test\\resources\\Login\\Login.feature"},
  glue={"stepsdefinition"},
  tags = "@negative",
  dryRun=false,//To check whether you have missed any steps in the scenario
  monochrome=true,//To make the console output in a better format
  strict = true,//it will check whether any step is not defined in step definition
  plugin = {"html:testoutput/testouput.html","junit:testoutput/cucumber.xml","json:testoutput/cucumber.json"}
  )
public class Test_runner {

}
