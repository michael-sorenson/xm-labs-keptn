
var payload = JSON.parse( request.body );

output['source']           = payload['source'];
output['id']               = payload['id'];
output['time']             = payload['time'];
output['shkeptncontext']   = payload['shkeptncontext'];

output['PID']              = payload.data['PID'];
output['impactedEntities'] = payload.data['ImpactedEntities'];
output['impactedEntity']   = payload.data['ImpactedEntity'];
output['problemDetails']   = payload.data['ProblemDetails'];
output['problemID']        = payload.data['ProblemID'];
output['problemTitle']     = payload.data['ProblemTitle'];
output['state']            = payload.data['State'];

if (payload.data['problemDetails']) {
    output['problemDetailsHTML'] = '<pre>' + JSON.stringify( payload.data['problemDetails'] ).replace( /\n/g, "<br>" ) + '</pre>';
} else {
    output['problemDetailsHTML'] = '';
}