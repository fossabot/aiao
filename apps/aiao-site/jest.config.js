module.exports = {
  name: 'aiao-site',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/aiao-site',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
