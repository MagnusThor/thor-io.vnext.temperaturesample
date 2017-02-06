import {
    ThorIO,
    CanInvoke,
    CanSet,
    ControllerProperties
} from "thor-io.vnext"


@ControllerProperties("microservice",false)
export class MicroServiceController extends ThorIO.Controller{
        @CanSet(true) 
        minLevel: number = 0;
        @CanSet(true) 
        maxLevel: number = 10;
        constructor(connection:ThorIO.Connection){
            super(connection);
        }
        @CanInvoke(true)
        setThreshold(data:any){
            this.minLevel = data.min;
            this.maxLevel = data.max;
            this.invoke({ min: this.minLevel,max: this.maxLevel},"thresholdChange");
        }
        @CanInvoke(true)
        temperatureUpdate(data:any){
            let expression = (pre:MicroServiceController) =>{
                return data.temp > pre.minLevel && data.temp < pre.maxLevel
            };
            this.invokeTo(expression,data,"temperatureChange");
        }
}

