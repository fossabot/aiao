module.exports = {
  name: 'unit',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/unit',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
